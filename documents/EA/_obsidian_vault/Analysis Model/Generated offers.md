---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Contract Detail"
domain: "Analysis Model"
element_id: 1755520
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Generated offers

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Contract Detail

## 📝 Notes

This panel is visible if there are some active (Offer_Financial_Parameters.Status = 'A') optional (i.e. alternative or up-sell, in LDM: Offer_Financial_Parameters.Type = 'A') offers generated for the contract. For more info see UC 01.210 Show contract detail.

Above the grid, the actual (chosen = 'YES') offer is displayed. This offer is displayed in the same structure as the offers in the Available optional offers grid always with the same cell spacing.

## 📊 Appears In (1 diagrams)

- Custom: Product Offers in Contract detail
