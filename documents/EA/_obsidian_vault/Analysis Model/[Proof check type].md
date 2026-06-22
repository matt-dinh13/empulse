---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Set proof check (modal window)"
domain: "Analysis Model"
element_id: 1543541
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ [Proof check type]

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Set proof check (modal window)

## 📝 Notes

Type of the document's possible proof check.

Separate instance of the checkbox is displayed for each available document proof check type from the Document Proof Check Type enumeration.

LDM source:
Document->Document_Attribute[->Document_Type_Attribute.Code='PROOF_CHECK'].Value

Localization code: none //No label - only the document proof check type's name value is displayed.

## 🔗 Connections (1)

- → Dependency: [[Document Proof Check Type]]

## 📊 Appears In (1 diagrams)

- Custom: Set proof check
