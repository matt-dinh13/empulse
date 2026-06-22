---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model/Tab Customer Offers v2"
domain: "Modules"
element_id: 1878702
diagrams: 1
connections: 2
tags:
  - screen
  - modules
---

# 📱 {ADD}Customer offers tab v2

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model/Tab Customer Offers v2

## 📝 Notes

{ADD CLM-2381/}
This layout presents the Customer offers tab placed on the Client detail screen
It contains a list of panels (Customer Offer detail) filled by data from OfferStore (OFS) - response of GET .../offers/partyId/{partyId} - PartyOffers.Offer (records)

Customer offers are initially sorted by:
- PartyOffers.Offer.priority ascending,
- Valid to ascending (if not defined then displayed in the end of the list),
- Offer Name ascending.

Localization code: CLI_CustomerOffers

## 🔗 Connections (1)

- → Dependency: [[Show tab Customer offers]]

## 📊 Appears In (1 diagrams)

- Custom: Customer offers tab v2
