---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API"
domain: "Requirements Model"
element_id: 1821069
diagrams: 6
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Get application DDM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API

## 📝 Notes

This object describes the steps, how system gets the data of the specific direct debit mandate (or multiple direct debit mandates).

Input:
- DirectDebitMandateCode [1..n] = unique identification code of the direct debit mandate

Output:
- DirectDebitMandate [0..n] = object of respective direct debit mandate
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes each DirectDebitMandateCode from the input and gets the data of the corresponding direct debit mandate by calling the respective REST API provided by the Payments module (i.e. GET DDM) with following input parameters:
   - code = DirectDebitMandateCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives the GetDDMResponse and proceeds based on the returned data accordingly - in case no data are returned for the requested direct debit mandate(s), system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes each received DirectDebitMandate (DirectDebitMandateData) from the response and returns them to the calling object.
	
- Algorithm ends.

## 🔗 Connections (6)

- ← Dependency: [[{MOD}01.422 Update application DDM]]
- ← Dependency: [[documentData]]
- ← Dependency: [[Get all application DDM]]
- ← Dependency: [[{MOD}DocumentData (Class 1821417)]]
- ← Dependency: [[Application form construction]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (6 diagrams)

- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: LOR-9306 - Update direct debit mandate from Application detail via DDM REST API
- Custom: LOR-9326 - Get direct debit mandate data for HO_CONTRACT_DATA data source via PAYM API
- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
- Custom: LOR-9440 - Adjust logic of direct debit mandate data prefilling onto application form
- Custom: Operations with application DDM
