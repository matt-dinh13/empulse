---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813827
diagrams: 2
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {DEL}Related loan

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

{DEL LOR-10106/}
{ADD LOR-10052/}
Number of loan that is related to current application. The value is a hyperlink that will redirect user to the detail of related loan. 

Visible only if extended property exits and global parameter useRelatedApplicationLink = TRUE

LDM source:
Contract->Extended_property_value[.Ext_property_item_code = 'RELATED_LOAN'].Value

Localization code:
APP_RelatedApplication

## 📊 Appears In (2 diagrams)

- Custom: Application detail header
- Custom: LOR-10052 Link in application detail to related contract
