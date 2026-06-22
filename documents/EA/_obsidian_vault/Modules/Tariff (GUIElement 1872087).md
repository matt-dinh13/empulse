---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface"
domain: "Modules"
element_id: 1872087
diagrams: 1
connections: 4
tags:
  - guielement
  - modules
---

# 🖥️ Tariff

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface

## 📝 Notes

Listed: Tariff. (code + name) where Tariff.Currency = Product.Currency and Tariff.VersionStatus = Active

LDM: Product.Tariff

Disabled if Product.Currency is not specified 

Localization code: ProductTO_tariff

## 🔗 Connections (4)

- → Dependency: [[{MOD}Tariff]]
- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Product and Tariff cross validation]]
- → Dependency: [[Only active item can be related]]

## 📊 Appears In (1 diagrams)

- Custom: Set main product properties
