---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with partners"
domain: "Analysis Model"
element_id: 1878492
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Get partner data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with partners

## 📝 Notes

This object describes the steps, how system gets the data of the specific partner.

Input:
- PartnerCode = code of the partner

Output:
- Partner [0..1] = object of the respective partner
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- System takes the PartnerCode from the input and gets the data of the corresponding partner by calling the respective REST API provided by the HomeSIS module (i.e. GET https://homesis.{environment}/homesis/restful/partners/{partnerCode}) with following input parameters:
   - partnerCode = PartnerCode

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested partner, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received Partner from the response and returns it to the calling object.
	
- Algorithm ends.

## 📊 Appears In (1 diagrams)

- Custom: Operations with partners
