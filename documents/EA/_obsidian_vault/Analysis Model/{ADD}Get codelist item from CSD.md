---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with CSD codelists"
domain: "Analysis Model"
element_id: 1878488
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get codelist item from CSD

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with CSD codelists

## 📝 Notes

This object describes the steps, how system gets the data of some specific codelist item from the CSD module.

Input:
- CodelistCode = code of the applicable codelist
- CodelistItemCode = code of the codelist item

Output:
- CodelistItem [0..1] = object of respective codelist item
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the CodelistCode and CodelistItemCode from the input and gets the data of the corresponding codelist item by calling the respective REST API provided by the CSD module (i.e. GET https://csd.{environment}/csd/api/csd/v1/codelist/{group}/search/{codelist}/{code}) with following input parameters:
   - group = 'CUST'
   - codelist = CodelistCode
   - code = CodelistItemCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested codelist item, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received CodelistItem from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[documentData]]
- ← Dependency: [[documentData]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with CSD codelists
