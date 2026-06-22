---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents"
domain: "Analysis Model"
element_id: 1819655
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Remove document content

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents

## 📝 Notes

Button for deleting the document's page content (from the document archive).

Activates:
- 01.126 Upload client document file - when applicationDetail.dmsUploadFile = FALSE
- 20.126 Upload client document file - when applicationDetail.dmsUploadFile = TRUE

Activates:
-  01.133 Delete document content - when applicationDetail.dmsDeleteFile = FALSE
- 20.133 Delete document content - when applicationDetail.dmsDeleteFile = TRUE

Localization code:
DOC_RemoveContent

## 🔗 Connections (2)

- → Dependency: [[01.133 Delete document content (UseCase 1880251)]]
- → Dependency: [[20.133 Delete document content (UseCase 1819632)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client documents
