---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Document info/User Interface Model"
domain: "Analysis Model"
element_id: 1746133
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ New document version is being uploaded into document archive.

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Document info/User Interface Model

## 📝 Notes

Warning message informing the user about the fact, that upload of the document file into the document archive has not finished yet.

Visible only if the upload of applicable document file into the document archive is still in progress (i.e. Document->DMS_File[FileType].Upload_In_Progress_Flag = TRUE). //Or Document->Document_DMS_File[.File_Type=FileType]->DMS_File.Upload_In_Progress_Flag = TRUE when parameter (parameters.properties) document.multipleContentFilesEnabled = TRUE.

Localization code:
MSG_DOCUMENT_UPLOAD_IN_PROGRESS

## 📊 Appears In (1 diagrams)

- Custom: Document page information
