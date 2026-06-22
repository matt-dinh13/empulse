---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API"
domain: "Requirements Model"
element_id: 1821071
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Get client's previous DDM for application form prefilling

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API

## 📝 Notes

This object describes the steps, how system gets the particular instance of a direct debit mandate (from the previous contracts of the client), whose data shall be used for the prefilling of the application form.
Input:

	
- CUID = client's unique identifier


Output:

	
- Array of following information-pairs [0..n]:
   - DirectDebitMandate = object of the direct debit mandate, whose data shall be used for the application form prefilling
   - BankBranch = object of the bank branch maintaining the bank account associated with the respective direct debit mandate


Steps:

	
- System takes the CUID from the input and finds the applicable contracts of the corresponding client as follows:
   a) If the parameter (parameter.properties) prefillOnlyActiveDDM = TRUE, then system finds{/ADD} all the existing contracts of the respective client which are in status Signed, Active or Finished (i.e. Client[.CUID=CUID]->Client_Snapshot->Contract[.Status in ('N', 'A', 'K')]).
   b) Otherwise system finds all the existing contracts of the respective client (i.e. Client[.CUID=CUID]->Client_Snapshot->Contract) in any status.
In case no applicable contract is found, algorithm ends with no DirectDebitMandate returned on the output.
	
- System takes the contracts found within the previous step and filters those, which have any direct debit mandate associated to them (i.e. Contract->Contract_to_DDM.DDM_ID exists).
In case there is no such contract, algorithm ends with no DirectDebitMandate returned on the output.
	
- System gets the data of the individual direct debit mandates associated with the contracts filtered within the previous step according to the rule Get all application DDM (with respective ApplicationCode on the input). In case of failure (i.e. when ErrorCode is returned on the rule's output), algorithm ends with no DirectDebitMandate returned on the output.
	
- System takes the direct debit mandates retrieved within the previous step and filters out those, which are missing any of the following attributes:
   - Bank account holder name (i.e. GetDDMResponse.ddmData.bankAccountData.accountHolderName)
   - Bank account number (i.e. GetDDMResponse.ddmData.bankAccountData.accountNumber)
   - Bank account type (i.e. GetDDMResponse.ddmData.bankAccountData.accountType)

	
- If the parameter (parameter.properties) prefillOnlyActiveDDM = TRUE, then system takes the direct debit mandates retrieved within the previous steps and filters those, which are in status Received from confirmation or Suspended and has a confirmation status Approved (i.e. GetDDMResponse.ddmData.status in ('RFC', 'SUS') AND GetDDMResponse.ddmData.confirmation_Status = 'A').
In case there is no such direct debit mandate, algorithm ends with no DirectDebitMandate returned on the output.
	
- System takes the remaining direct debit mandates and gets the additional detailed data of the bank branch maintaining the bank account associated with them according to the rule Get bank branch data with following parameters on the input:
   - BankBranchSyncCode = GetDDMResponse.ddmData.bankAccountData.bankBranchSyncCode

In case of failure (i.e. when ErrorCode is returned on the rule's output), algorithm ends with no DirectDebitMandate returned on the output.
	
- If the parameter (parameter.properties) prefillOnlyActiveDDM = FALSE, then system takes each available pair of the DirectDebitMandate (DirectDebitMandateData) and its related BankBranch (BankBranchData) from the previous steps and returns them to the calling object. Then algorithm ends. //i.e. list of direct debit mandates is returned

Otherwise (i.e. if the parameter (parameter.properties) prefillOnlyActiveDDM = TRUE) system sorts the remaining direct debit mandates based on the date and time, since when the individual direct debit mandates are valid from (i.e. GetDDMResponse.ddmData.validFrom), in a descending order. From such ordered list, system then selects the most recent instance of the DirectDebitMandate (DirectDebitMandateData) and returns it along with its related BankBranch (BankBranchData) from the previous step to the calling object. //i.e. only single instance of a direct debit mandate is returned
	
- Algorithm ends.

## 🔗 Connections (3)

- → Dependency: [[Get bank branch data]]
- → Dependency: [[Get all application DDM]]
- ← Dependency: [[Prefill application form]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: LOR-9440 - Adjust logic of direct debit mandate data prefilling onto application form
- Custom: Operations with application DDM
