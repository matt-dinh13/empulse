---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Set document security level (modal window)"
domain: "Analysis Model"
element_id: 1547904
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Security level

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Set document security level (modal window)

## 📝 Notes

Security level of the document.

Enumeration values retrieved from SecurityLevelSelectboxEnum (ordered by .Name ASC).
Initially pre-selected value is picked according to the rule Populate security level select box options.

LDM source:
Document->Document_Attribute[->Document_Type_Attribute.Code='SECURITY_LEVEL'].Value

Localization code:
DOC_SetDocumentSecurityLevelSelect

## 🔗 Connections (3)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Populate security level select box options]]
- → Dependency: [[SecurityLevelSelectboxEnum]]

## 📊 Appears In (1 diagrams)

- Custom: Set document security level
