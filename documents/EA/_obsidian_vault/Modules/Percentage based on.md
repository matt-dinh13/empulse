---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface"
domain: "Modules"
element_id: 1825326
diagrams: 1
connections: 3
tags:
  - guielement
  - modules
---

# 🖥️ Percentage based on

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface

## 📝 Notes

Listed: BaseType.Name filtered according to the rule Search for Allowed Base Types by Usage 
- for usage = "SUPC" for Product Subvention
- for usage = "SSPC" for Service Subvention
If Service.ServiceType.Scope = COMMODITY then BaseTypes in (PLA, NLA) are hidden.

LDM: Subvention.PercentageBasedOn
Mandatory if Percentage rate is filled in.

Localization code: PRD_SubventionsPercentageBasedOn

## 🔗 Connections (3)

- → Dependency: [[Calculation method cross validations]]
- → Dependency: [[Calculation method - composite]]
- → Dependency: [[{MOD}Base Type]]

## 📊 Appears In (1 diagrams)

- Custom: Subvention-Set
