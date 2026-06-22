---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1879430
diagrams: 0
connections: 3
tags:
  - requirement
  - _uncategorized
---

# 📋 Validity of assigned instant card

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

- System calls CardInfoWS method GetCards with:
    -- reservationCode = Contract.Code.
	
- If the call fails, system returns FALSE and error MSG_CABUS_UNAVAILABLE.
	
- System compares the value from GetCardsResponse.cards.pcid with the value from Contract->Offer_financial_parameters->Offer_service->Offer_Card_Service.Card_number. If both values are equal and one of the following conditions is met:
   - GetCardsResponse.cards.status = 'RESERVED' 
   - GetCardsResponse.cards.status = 'INACTIVE' and .cards.account.contractCode is equal to the code of the processed contract (Contract.Code)
then system returns TRUE. Otherwise system returns FALSE without any error and removes the assigned card (i.e. Offer_Card_Service.Card_number is set to 'NULL' and Offer_Card_Service.Is_Validated is set to 'FALSE').

## 🔗 Connections (3)

- ← Dependency: [[01.180 Sign contract manually (UseCase 1878503)]]
- ← Dependency: [[{MOD}01.099 Sign contract externally]]
- ← Dependency: [[01.096 Prepare documentation externally (UseCase 1879294)]]
