---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface"
domain: "Modules"
element_id: 1867006
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Minimal amount of fee

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface

## 📝 Notes

LDM: TariffItem.MinAmount

Localization code: FEE_MinimalAmount

Mandatory if TariffItem.MinimalAmountToZero = TRUE (MSG_TARIFF_ITEM_MIN_AMOUNT_MANDATORY).

TARIFF_ITEM_MAX_MIN_MESSAGE

## 🔗 Connections (2)

- → Dependency: [[Limit interval]]
- → Dependency: [[Financial amount _= 0 (Requirement 1789776)]]

## 📊 Appears In (1 diagrams)

- Custom: Set Tariff Item
