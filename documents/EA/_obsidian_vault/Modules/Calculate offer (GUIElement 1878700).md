---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model/Tab Customer Offers v2"
domain: "Modules"
element_id: 1878700
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Calculate offer

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model/Tab Customer Offers v2

## 📝 Notes

Button for selection of an offer, it activates UC 01.010 Choose product offer to create a new contract. 

Visible only if all following conditions are met:

	
- the user is logged on a Salesroom


	
- the respective offer has defined an entry point for new application creation (i.e. PartyOffers.Offer.entryPoint in ('APPLICATION_CREATION_1SP', 'APPLICATION_CREATION_2SP')).


	
- the offer is available on the current salesroom (i.e. PartyOffers.Offer passed the rule {ADD}Check Customer offers availability on Salesroom with AvailableOnSalesroom = TRUE on its output).


Localization code: CLI_CalculateOffer

\\TODO:
Visibility
logged user from usersetting (BSL DB)
entry point
call isMarketingOfferAvailableOnSalesroom with current salesroom

navigate to bsl with params
return getUrl() + "/choose-product-offer?cuid=" + partyId + "&xSellOfferId=" + offerId;

## 🔗 Connections (1)

- → Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Custom: Customer offers tab v2
