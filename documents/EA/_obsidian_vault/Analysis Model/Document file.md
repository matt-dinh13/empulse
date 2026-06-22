---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Document page information (panel)"
domain: "Analysis Model"
element_id: 1741102
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Document file

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Document page information (panel)

## 📝 Notes

Panel containing the detailed information about all revisions of respective document file (with possibility to download any of such document file revisions).

When some particular exception occurs during the 01.135 Get information about document from document archive use case (see its steps for more details), then the whole panel is hidden and corresponding error message (MSG_DOCUMENT_NOT_FOUND_IN_ARCHIVE / MSG_DMS_ERROR) is displayed instead.

Localization code: none

## 🔗 Connections (1)

- → Realisation: [[01.135 Get information about document from document archive (UseCase 1880247)]]

## 📊 Appears In (1 diagrams)

- Custom: Document page information
