---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with CSD codelists"
domain: "Analysis Model"
element_id: 1878489
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get boundary item from CSD

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with CSD codelists

## 📝 Notes

This object describes the steps, how system gets the data of some specific boundary item from the CSD module.

Input:
- BoundaryType = type of the applicable boundary
- BoundaryItemCode = code of the boundary item

Output:
- BoundaryItem [0..1] = object of respective boundary item
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the BoundaryType and BoundaryItemCode from the input and gets the data of the corresponding boundary item by calling the respective REST API provided by the CSD module (i.e. GET https://csd.{environment}/csd/api/csd/v1/boundary/search/{type}?code={code}) with following input parameters:
   - type = BoundaryType
   - code = BoundaryItemCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested boundary item, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received BoundaryItem (i.e. Boundary.content.*) from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (4)

- ← Dependency: [[AddressType]]
- ← Dependency: [[AddressType]]
- ← Dependency: [[AddressType]]
- ← Dependency: [[AddressType]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with CSD codelists
