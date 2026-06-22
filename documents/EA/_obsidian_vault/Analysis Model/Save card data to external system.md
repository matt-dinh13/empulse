---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822820
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Save card data to external system

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

- If the parameter (parameters.properties) useCardEvidenceREST = FALSE, system calls the SaveCardRequest (method of CardEvidenceWS) with following input parameters:
    - cardNumber = PAN number
	
- System receives the applicable SaveCardResponse and proceeds based on the returned data as follows:

           a) In case of error (i.e. when any SaveCardResponse.error.* is returned), system displays the MSG_CardDataNotSaved error message and use case ends.
           b) In case the card data were successfully saved (i.e. when SaveCardResponse.cardData.* are returned), use case continues with the next step.
3.     If the parameter (parameters.properties) useCardEvidenceREST = TRUE, then system calls the respective REST API provided by the Card Evidence module (i.e.
        SaveCardRequest) with following input parameters:
             - cardHolderName = value constructed according to the rule Concatenate card holder name rule - VN
             - cardNumber =  PAN number
4.     System receives the applicable SaveCardResponse and proceeds based on the returned data as follows:
            a) In case of error (i.e. for the response with .code <> '200' (OK)), system displays the MSG_CardDataNotSaved error message and use case ends.
            b) In case the card data were successfully saved (i.e. when SaveCardResponse.cardData.* are returned), use case continues with the next step.
5.    Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
