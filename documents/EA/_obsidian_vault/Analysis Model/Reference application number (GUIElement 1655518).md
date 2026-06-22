---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information"
domain: "Analysis Model"
element_id: 1655518
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Reference application number

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application information

## 📝 Notes

Identification number of the client's previous (reference) application, which served as a trigger for the origination of the actual application.

Shown value is also an active link to the Application detail  screen for referenced application.

Visible only if not empty and parameter (parameters.properties) applicationDetail.showReferenceApplicationNumber = TRUE.

LDM source:
Contract->Temporary_Application->External_Identifier[.Key='PREVIOUS_APPLICATION_CODE'].Value

Localization code:
APP_ReferenceApplicationNumber

## 📊 Appears In (1 diagrams)

- Custom: Tab - Application information
