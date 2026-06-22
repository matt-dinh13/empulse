---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Information/User Interface"
domain: "Analysis Model"
element_id: 1399220
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contact Person

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Information/User Interface

## 📝 Notes

Contact person's name - from the list of contact persons for the actual seller place/partner - this field denotes a responsible person or owner of the contact.

Partner->Partner_Person->Person.Name1+' '+Name2
or
Salesroom->Salesroom_Person)->Person.Name1+' '+Name2

Localization code: GEN_ContactPerson

## 🔗 Connections (1)

- → Dependency: [[Person (Class 1686140)]]

## 📊 Appears In (1 diagrams)

- Custom: Create/Update Contact Information
