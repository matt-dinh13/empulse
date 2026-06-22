---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application documents"
domain: "Analysis Model"
element_id: 1750687
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Take photo

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Application documents

## 📝 Notes

Button for taking a photo of the document's page and its subsequent uploading into the document archive.

Activates:
- 01.127 Take and upload contract document photo - when applicationDetail.dmsUploadFile = FALSE
- 20.127 Take and upload contract document photo - when applicationDetail.dmsUploadFile = TRUE

Localization code:
GEN_TakePhoto

## 🔗 Connections (2)

- → Dependency: [[20.127 Take and upload contract document photo (UseCase 1819578)]]
- → Dependency: [[01.127 Take and upload contract document photo (UseCase 1880243)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Application documents
