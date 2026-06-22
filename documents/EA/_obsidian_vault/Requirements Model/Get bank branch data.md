---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API"
domain: "Requirements Model"
element_id: 1878483
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Get bank branch data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API

## 📝 Notes

This object describes the steps, how system gets the data of the specific bank branch.

Input:
- BankBranchSyncCode = unique identification code of the bank branch

Output:
- BankBranch [0..1] = object of the respective bank branch
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the BankBranchSyncCode from the input and gets the data of the corresponding bank branch by calling the respective REST API provided by the Payments module (i.e. GET GetBankBranchDataRequest) with following input parameters:
   - bankBranchSyncCode = BankBranchSyncCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives the GetBankBranchDataResponse and proceeds based on the returned data accordingly - in case no data are returned for the requested bank branch, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received BankBranch from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}01.462 Get DDM by application]]
- ← Dependency: [[Get client's previous DDM for application form prefilling]]
- ← Dependency: [[PaymentChannel (Class 1821431)]]
- ← Dependency: [[DirectDebitMandate (Class 1821408)]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API
- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- Custom: Operations with bank branches
