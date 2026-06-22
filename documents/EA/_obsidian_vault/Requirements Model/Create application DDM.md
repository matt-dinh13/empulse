---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1821075
diagrams: 4
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Create application DDM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

This object describes the steps, how system creates a new direct debit mandate for the application.

Input:
- ApplicationCode = unique identifier of the application (to be associated with the direct debit mandate)
- DirectDebitMandateData = relevant data of the direct debit mandate to be created [BankAccountHolderName; BankAccountNumber; BankAccountType; BankBranchSyncCode; Currency; DDMFrequency; DocumentUUID[]; LimitAmount; RegularPaymentAmount; RegularPaymentType; ValidFrom; ValidTo]

Output:
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System creates a new direct debit mandate by calling the respective REST API provided by the Payments module (i.e. POST CreateDDMDraftRequest) with following input parameters:
   - bankAccountData.* 
       - accountHolderName = DirectDebitMandateData[BankAccountHolderName]
       - accountNumber = DirectDebitMandateData[BankAccountNumber]
       - accountType = DirectDebitMandateData[BankAccountType]
          Note: when enableDDMSourceAndType is true and DirectDebitMandateData[BankAccountType] is null, system sets default value  'CA'
       - bankBranchSyncCode = DirectDebitMandateData[BankBranchSyncCode]
   - ddmFrequency = DirectDebitMandateData[DDMFrequency] if not null, otherwise 'M'
   - ddmType = 'STANDARD'
   - documentData.*
       - uuid = DirectDebitMandateData[DocumentUUID]
   - limit.*
       - amount = DirectDebitMandateData[LimitAmount]
       - currency = DirectDebitMandateData[Currency] if not null, otherwise Currency[.Is_Default=TRUE].Code
   - regularPaymentData.*
       - regularPaymentTypeCode = DirectDebitMandateData[RegularPaymentType]
       - regularPaymentAmount.*
           - amount = DirectDebitMandateData[RegularPaymentAmount]
           - currency = DirectDebitMandateData[Currency] if not null, otherwise Currency[.Is_Default=TRUE].Code
   - status = 'NEW'
   - validFrom = DirectDebitMandateData[ValidFrom]
   - validTo = DirectDebitMandateData[ValidTo]

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on its type as follows:
a) In case the direct debit mandate was successfully created (i.e. for the response with .code = '200' (OK)), system performs the following sub-steps:
   - System creates a new record of Application_to_DDM and links it to the processed application identified by the ApplicationCode (i.e. (Contract->)Temporary_Application->Application_to_DDM).
   - System saves the value of .ddmCode returned within the respective response into Application_to_DDM.DDM_ID.
b) Otherwise system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object.
	
- Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[01.421 Create application DDM (UseCase 1818674)]]
- ← Dependency: [[Save application DDM data]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9325 - Create direct debit mandate from Application detail via DDM REST API
- Custom: LOR-9582 DDM validation when signing agreement
- Custom: Operations with application DDM
