---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface"
domain: "Modules"
element_id: 1867014
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Fixed amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface

## 📝 Notes

LDM: TariffItem.Amount
Visible only if TariffItem.CalculationMethod = fixed

For country: PH
Visible only if TariffItem.CalculationMethod in (fixed , combined)

Localization code: CMS_Amount

## 🔗 Connections (2)

- → Dependency: [[Calculation method cross validations - simple]]
- → Dependency: [[Fixed amount]]

## 📊 Appears In (1 diagrams)

- Custom: Set Tariff Item
