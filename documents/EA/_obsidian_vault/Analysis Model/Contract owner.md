---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813811
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contract owner

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

List of contract owners (owner names) separated by comma.

Visible only if not empty.

LDM source:

	
- Lender[.Code=ApplicationLenderCode].Name

- where ApplicationLenderCode is got from Contract->Relationship[.Role_Type='LENDER']->Party.External_ID

Note: In case there are multiple relationships of respective role type found on the application, the individual Lender.Name values are separated by comma.


Localization code:
CON_Owner

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
