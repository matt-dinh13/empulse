---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface"
domain: "Modules"
element_id: 1866992
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Annual rate projection 

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface

## 📝 Notes

Listed: TariffAnnualRateProjection.Name
LDM: TariffItem.AnnualRateProjection
Visible and mandatory only if TariffItem.CalculationMethod = annual percentage
Visible and optional if TariffItem.CalculationMethod = Manual amount. Only PID is available.

Localization code: TAR_AnnualRateProjection

## 🔗 Connections (2)

- → Dependency: [[Tariff Item Calculation method]]
- → Dependency: [[Tariff Annual Rate Projection]]

## 📊 Appears In (1 diagrams)

- Custom: Set Tariff Item
