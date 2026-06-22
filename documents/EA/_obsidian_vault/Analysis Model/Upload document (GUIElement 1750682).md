---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application documents"
domain: "Analysis Model"
element_id: 1750682
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Upload document

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application documents

## 📝 Notes

Button for uploading the document's content into the document archive.

Visible only if parameter (parameters.properties) document.multipleContentFilesEnabled = FALSE.

Activates:
- 01.125 Upload contract document - when applicationDetail.dmsUploadFile = FALSE
- 20.125 Upload application document - when applicationDetail.dmsUploadFile = TRUE

Localization code:
DOC_Upload

## 🔗 Connections (2)

- → Dependency: [[20.125 Upload application document]]
- → Dependency: [[01.125 Upload contract document]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Application documents
