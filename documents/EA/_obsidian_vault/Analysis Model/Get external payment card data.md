---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels"
domain: "Analysis Model"
element_id: 1827643
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Get external payment card data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels

## 📝 Notes

This object describes the steps, how system gets the data of the specific external payment card.

Input:
- ExternalPaymentCardID = unique identifier of the external payment card

Output:
- ExternalPaymentCard [0..1] = object of the respective external payment card
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps

Steps:

	
- If the parameter (parameters.properties) useCardEvidenceREST = FALSE (applicable when processed in BSL only), system takes the ExternalPaymentCardID from the input and gets the data of the corresponding external payment card by calling the GetCardInfoRequest (method of CardEvidenceWS) with following input parameters:
   - cardReferenceNumber = ExternalPaymentCardID

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives the GetCardInfoResponse and proceeds based on the returned data accordingly - in case of error (i.e. when any GetCardInfoResponse.error.* is returned), system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received ExternalPaymentCard (GetCardInfoResponse.cardData.*) from the response, returns it to the calling object and algorithm ends.
	
- //Starting this step, the algorithm is applicable when processed in DSM by default (there is no parameter useCardEvidenceREST present in such module though)
If the parameter (parameters.properties) useCardEvidenceREST = TRUE (evaluated when processed in BSL only), system takes the ExternalPaymentCardID from the input and gets the data of the corresponding external payment card by calling the respective REST API provided by the CEV module (i.e. GET https://{environment}/cev-api/card/getCardInfo/{cardReferenceNumber}) with following input parameters:
   - cardReferenceNumber = ExternalPaymentCardID

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System receives an applicable REST API response and proceeds based on the returned data accordingly - in case of error (for the response with .code <> '200' (OK)), system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.
	
- System takes the received external payment card data (ExternalPaymentCard) from the response and returns it to the calling object.
	
- Algorithm ends.

## 🔗 Connections (4)

- ← Dependency: [[PaymentChannel (Class 1821431)]]
- ← Dependency: [[Application form construction]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]
- ← Dependency: [[{MOD}ConsumerLoanParametersType (Class 1878252)]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application payment channels
