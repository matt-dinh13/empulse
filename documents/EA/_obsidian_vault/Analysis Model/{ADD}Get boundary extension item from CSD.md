---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with CSD codelists"
domain: "Analysis Model"
element_id: 1878487
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Get boundary extension item from CSD

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with CSD codelists

## 📝 Notes

This object describes the steps, how system gets the data of some specific boundary extension item from the CSD module.

Input:
- BoundaryExtType = type of the applicable boundary extension
- BoundaryExtItemCode = code of the boundary extension item

Output:
- BoundaryExtItem [0..1] = object of respective boundary extension item
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the BoundaryExtType and BoundaryExtItemCode from the input and gets the data of the corresponding boundary extension item by calling the respective REST API provided by the CSD module (i.e. GET https://csd.{environment}/csd/api/csd/v1/boundary/boundaryExt/search/{type}?id={id}) with following input parameters:
   - type = BoundaryExtType
   - id = BoundaryExtItemCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested boundary extension item, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received BoundaryExtItem (i.e. BoundaryExt.content.*) from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[AddressType]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with CSD codelists
