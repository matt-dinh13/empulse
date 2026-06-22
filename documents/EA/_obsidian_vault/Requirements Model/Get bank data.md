---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API"
domain: "Requirements Model"
element_id: 1878484
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Get bank data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API

## 📝 Notes

This object describes the steps, how system gets the data of the specific bank.

Input:
- BankCode = unique identification code of the bank

Output:
- Bank [0..1] = object of the respective bank
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the BankCode from the input and gets the data of the corresponding bank by calling the respective REST API provided by the Payments module (i.e. GET GetBankDataRequest) with following input parameters:
   - bankCode = BankCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives the GetBankDataResponse and proceeds based on the returned data accordingly - in case no data are returned for the requested bank, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received Bank from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.462 Get DDM by application]]
- ← Dependency: [[DirectDebitMandate (Class 1821408)]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API
- Custom: LOR-9344 - Get direct debit mandate data for ApplicationPaymentChannelManagementWS via PAYM API
- Custom: Operations with banks
