---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface"
domain: "Analysis Model"
element_id: 1609917
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Delivery option

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface

## 📝 Notes

Client's delivery option (pick up on POS or send to main/contact address).

Source:

	
- GetCardResponse.card.cardDeliveryType


Localization code:

	
- label: REL_PerCardDeliveryOption
	
- values: 
- GetCardResponse.card.cardDeliveryType.POS - REL_PerCardPOSDelivery
- GetCardResponse.card.cardDeliveryType.CUSTOMER_PERMANENT - REL_PerCardClientMainAddress
- GetCardResponse.card.cardDeliveryType.CUSTOMER_CONTANT - REL_PerCardClientContactAddress
- GetCardResponse.card.cardDeliveryType.CUSTOMER_EMPLOYER -> REL_PerCardClientEmployerAddress (e.g. Client's employer address)

## 📊 Appears In (1 diagrams)

- Custom: Card detail - User interface
