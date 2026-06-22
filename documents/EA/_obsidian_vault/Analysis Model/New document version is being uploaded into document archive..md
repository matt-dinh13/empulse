---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Document page information (panel)"
domain: "Analysis Model"
element_id: 1741101
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ New document version is being uploaded into document archive.

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Document page information (panel)

## 📝 Notes

Warning message informing the user about the fact, that upload of the document file into the document archive has not finished yet.

Visible only if the upload of applicable document file into the document archive is still in progress (i.e. Document->DMS_File[FileType].Upload_In_Progress_Flag = TRUE). //Or Document->Document_DMS_File[.File_Type=FileType]->DMS_File.Upload_In_Progress_Flag = TRUE when parameter (parameters.properties) document.multipleContentFilesEnabled = TRUE.

Localization code:
MSG_DOCUMENT_UPLOAD_IN_PROGRESS

## 📊 Appears In (1 diagrams)

- Custom: Document page information
