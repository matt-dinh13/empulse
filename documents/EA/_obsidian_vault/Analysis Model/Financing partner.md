---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813817
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Financing partner

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Financing partner participating on the co-financing of the application. //Joint Financing Scheme (JFS) partner.

Visible only if global parameter ShowJFS = TRUE.

LDM source:
Lender[.Code=ApplicationJointLenderCode].Name

- where ApplicationJointLenderCode is got from Contract->Relationship[.Role_Type='JOINT_LENDER']->Party.External_ID

Note: In case there are multiple relationships of respective role type found on the application, then each applicable Lender.Name value is displayed on a separate line.

Localization code:
APP_FinancingPartner

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
