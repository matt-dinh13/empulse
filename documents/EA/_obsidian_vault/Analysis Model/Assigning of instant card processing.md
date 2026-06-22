---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822816
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Assigning of instant card processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

Input:
- contract.Code (mandatory)
- pcid (mandatory)
- reservationValidTo (optional)
 

	
- System saves entered card number to Offer_card_service.Card_number
	
- System calls card management system for card number validation and reservation (CardOriginationWS interface, method ReserveInstantCard) with parameters of ReserveInstantCardRequest: 
- pcid = inputted pcid
- reservationCode = Contract.Code,
- embossed Name = Offer_card_service.Emboss_name
- cardHolderName(firstName, middleName, lastName) - values are taken from Temporary_Application according to country specific rules for mapping of client names(1-6)
- renewalCardType - value is evaluated  according to the rule Get Renewal Card Type with parameter Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Offer_Card_Service->Service.
- reservationCardType = Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Offer_Card_Service->Service->Standard_Payment_Card_Service ->External Card Type.Code
- reservationValidTo - inputted reservationValidTo
	
- If card was not successfully validated:
- when Cabus doesn't respond system displays MSG_CABUS_UNAVAILABLE
- when wrong embossName was entered (CardOrigination.ReserveInstantCardResponse.resultCode = 'ERROR_INVALID_EMBOSSNAME'), system displays MSG_ErrEmbossOtherError.
- when embossName is not allowed for card type (CardOrigination.ReserveInstantCardResponse.resultCode = ERROR_EMBOSSNAME_NOT_ALLOWED_FOR_CARD_TYPE), system displays MSG_ErrEmbossNotAllowedForCardType.
- when card is already reserved for other contract (CardOrigination.ReserveInstantCardResponse.resultCode = 'ERROR_CARD_ALREADY_RESERVED'), system displays MSG_CardAlreadyReserved.
- when entered card type is different then card type on Temporary_Application->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters->Offer_Card_Service->Service->Standard_Payment_Card_Service->External_Card_Type.Code (CardOrigination.ReserveInstantCardResponse.resultCode = 'ERROR_INVALID_CARD_TYPE'), system displays MSG_ErrInvalidCardType.
- otherwise system displays MSG_CardNumberValidationUnsuccessful with returned reason
	
- If card number is successfully validated (CardOrigination.ReserveInstantCardResponse.resultCode = SUCCESS), system:
- sets Offer_card_service.Is_Validated = 'TRUE'

## 🔗 Connections (3)

- → Dependency: [[Get Renewal Card Type]]
- ← Dependency: [[01.185 Validate card number (UseCase 1878505)]]
- ← Dependency: [[01.385 Assign card to application externally (UseCase 1879300)]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
