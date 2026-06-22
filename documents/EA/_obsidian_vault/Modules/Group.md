---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface"
domain: "Modules"
element_id: 1866993
diagrams: 1
connections: 3
tags:
  - guielement
  - modules
---

# 🖥️ Group

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Item/User Interface

## 📝 Notes

Listed: TariffItemGroup.Name
LDM: TariffItem.TariffItemGroup

If TariffItem.TariffItemType is filled, list is filtered according to Tariff Item Group 2 Tariff Item Type Configuration.
If current value is not in the filtered list, system sets current value as blank.

Localization code: TAR_Group

## 🔗 Connections (3)

- → Dependency: [[Tariff Item Group]]
- → Dependency: [[Only active item can be related]]
- → Dependency: [[Tariff Item Group 2 Tariff Item Type Configuration]]

## 📊 Appears In (1 diagrams)

- Custom: Set Tariff Item
