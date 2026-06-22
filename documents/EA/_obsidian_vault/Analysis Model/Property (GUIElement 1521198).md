---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Extended properties/Create extended property"
domain: "Analysis Model"
element_id: 1521198
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Property

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Extended properties/Create extended property

## 📝 Notes

Name of the application extended property.

Enumeration values retrieved from Extended Property Item (ordered by .Name ASC).

Once some item is selected from the enumeration, system recreates the Value field based on the applicable data type configured on a level of corresponding property item (Extended_Property_Item.Data_Type).


LDM source:
Contract->Extended_Property_Value->Extended_Property_Item.Name

Localization code:
EXT_Property

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Extended Property Item]]

## 📊 Appears In (1 diagrams)

- Custom: Create extended property
