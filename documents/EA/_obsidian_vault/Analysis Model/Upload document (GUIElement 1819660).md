---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents"
domain: "Analysis Model"
element_id: 1819660
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Upload document

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents

## 📝 Notes

Button for uploading the document's page content into the document archive.

Activates:
- 01.126 Upload client document file - when applicationDetail.dmsUploadFile = FALSE
- 20.126 Upload client document file - when applicationDetail.dmsUploadFile = TRUE

Localization code:
DOC_Upload

## 🔗 Connections (2)

- → Dependency: [[01.126 Upload client document file]]
- → Dependency: [[20.126 Upload client document file (UseCase 1819634)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client documents
