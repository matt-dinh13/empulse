---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents"
domain: "Analysis Model"
element_id: 1819651
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Take photo

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents

## 📝 Notes

Button for taking a photo of the document and its subsequent uploading into the document archive.

Visible only if parameter (parameters.properties) document.multipleContentFilesEnabled = FALSE.

Activates:
- 01.129 Take and upload client document photo - when applicationDetail.dmsUploadFile = FALSE
- 20.129 Take and upload client document photo - when applicationDetail.dmsUploadFile = TRUE

Localization code:
GEN_TakePhoto

## 🔗 Connections (2)

- → Dependency: [[01.129 Take and upload client document photo (UseCase 1880234)]]
- → Dependency: [[20.129 Take and upload client document photo (UseCase 1819633)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client documents
