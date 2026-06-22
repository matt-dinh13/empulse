---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/Customer offers tab v2"
domain: "Analysis Model"
element_id: 1761156
diagrams: 1
connections: 2
tags:
  - screen
  - analysis-model
---

# 📱 {ADD}Customer offers tab v2

> **Type**: Screen
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail/Customer offers tab v2

## 📝 Notes

{ADD CLM-2381 /}
This layout presents the Customer offers tab placed on the Client detail screen
It contains a list of panels (Customer Offer detail) filled by data from OfferStore (OFS) - response of GET .../offers/partyId/{partyId} - PartyOffers.Offer (records)

Customer offers are initially sorted by:
- PartyOffers.Offer.priority ascending,
- Valid to ascending (if not defined then displayed in the end of the list),
- Offer Name ascending.

Localization code: CLI_CustomerOffers

## 🔗 Connections (1)

- → Dependency: [[{MOD}06.030 Show Client Data]]

## 📊 Appears In (1 diagrams)

- Custom: Customer offers tab v2
