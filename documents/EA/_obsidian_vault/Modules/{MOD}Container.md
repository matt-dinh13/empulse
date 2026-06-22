---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Document Container Assignment/User Interface"
domain: "Modules"
element_id: 1663136
diagrams: 1
connections: 4
tags:
  - guielement
  - modules
---

# 🖥️ {MOD}Container

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Document Container Assignment/User Interface

## 📝 Notes

Listed: DocumentContainer.(code + name) where Active = true {ADD PCG-3403}obtained by Get list of Document Containers with attribute activeOnly = true{/ADD}
Enabled: only for creating of container assignment.
LDM: Product. ProductContainerRule.DocumentContainer

Localization code: DOC_Container

## 🔗 Connections (4)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Unique assignment to product]]
- → Dependency: [[Only active item can be related]]
- → Dependency: [[Document Container (Class 1485210)]]

## 📊 Appears In (1 diagrams)

- Custom: Containers-Assign
