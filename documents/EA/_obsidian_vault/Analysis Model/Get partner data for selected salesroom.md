---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with partners"
domain: "Analysis Model"
element_id: 1878493
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Get partner data for selected salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with partners

## 📝 Notes

This object describes the steps, how system gets the data of the partner associated with the specific salesroom.

Input:
- SalesroomCode = code of the salesroom

Output:
- Partner [0..1] = object of the respective partner
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the SalesroomCode from the input and gets the data of the corresponding salesroom according to the rule Get salesroom data (with respective SalesroomCode on the input).
In case of failure (i.e. when ErrorCode is returned on the rule's output), system returns the respective ErrorCode to the calling object and algorithm ends.
	
- System takes the salesroom data returned within the previous step and gets the data of the partner associated with the salesroom by calling the respective REST API provided by the HomeSIS module (i.e. GET https://homesis.{environment}/homesis/restful/partners/{partnerCode}) with following input parameters:
   - partnerCode = Salesroom.partnerCode (returned within the previous step)

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested partner, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received Partner from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (6)

- ← Dependency: [[AccountType]]
- ← Dependency: [[AccountType]]
- ← Dependency: [[PaymentChannel (Class 1821431)]]
- ← Dependency: [[Partner (GUIElement 1857143)]]
- ← Dependency: [[Partner (GUIElement 1873900)]]
- → Dependency: [[Get salesroom data]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with partners
