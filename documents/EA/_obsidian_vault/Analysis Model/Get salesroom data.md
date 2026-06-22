---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with salesrooms"
domain: "Analysis Model"
element_id: 1878494
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Get salesroom data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with salesrooms

## 📝 Notes

This object describes the steps, how system gets the data of the specific salesroom.

Input:
- SalesroomCode = code of the salesroom

Output:
- Salesroom [0..1] = object of the respective salesroom
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the SalesroomCode from the input and gets the data of the corresponding salesroom by calling the respective REST API provided by the HomeSIS module (i.e. GET https://homesis.{environment}/homesis/restful/salesrooms/{salesroomCode}) with following input parameters:
   - salesroomCode = SalesroomCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested salesroom, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received Salesroom from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (5)

- ← Dependency: [[AccountType]]
- ← Dependency: [[AccountType]]
- ← Dependency: [[PaymentChannel (Class 1821431)]]
- ← Dependency: [[Partner bank branch (GUIElement 1857147)]]
- ← Dependency: [[Get partner data for selected salesroom]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with salesrooms
