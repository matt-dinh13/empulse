---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/Customer offers tab v2"
domain: "Analysis Model"
element_id: 1761145
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Update offer

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/Customer offers tab v2

## 📝 Notes

Button for marketing offer update. When clicked, use case 01.143 Recalculate client's x-sell offer is activated with offerID of selected offer and sourceChannel = 'CLIENT_DETAIL' 

Visible and enabled only if following conditions rae fulfilled:

	
- {DEL TFT-4844}user has access right UC02_906_UpdateMarketingOffer{/DEL}
	
- all pre-condition for this UC are fulfilled.
	
- the respective offer has an entry point allowing the client's scoring (i.e. PartyOffers.Offer.entryPoint = 'SCORING' or 'SCORING_NO_OTP').


Localization code: CLI_UpdateProductOffer

## 🔗 Connections (1)

- → Dependency: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]

## 📊 Appears In (1 diagrams)

- Custom: Customer offers tab v2
