---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/Customer offers tab v2"
domain: "Analysis Model"
element_id: 1761137
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Calculate offer

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/Customer offers tab v2

## 📝 Notes

Button for selection of an offer, it activates UC 01.010 Choose product offer to create a new contract. 

Visible only if all following conditions are met:

	
- the user is logged on a Salesroom


	
- the respective offer has defined an entry point for new application creation (i.e. PartyOffers.Offer.entryPoint in ('APPLICATION_CREATION_1SP', 'APPLICATION_CREATION_2SP')).


	
- the offer is available on the current salesroom (i.e. PartyOffers.Offer passed the rule {ADD}Check Customer offers availability on Salesroom with AvailableOnSalesroom = TRUE on its output).


Localization code: CLI_CalculateOffer

## 🔗 Connections (1)

- → Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Custom: Customer offers tab v2
