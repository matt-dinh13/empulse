---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents"
domain: "Analysis Model"
element_id: 1819646
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Retry document upload

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Client documents

## 📝 Notes

Button for re-uploading the document's content into the document archive (in case of technical communication issues between the systems).

Visible only if all the following conditions are met:

	
- Parameter (parameters.properties) document.multipleContentFilesEnabled = FALSE.
	
- Previous document's content upload into the document archive is still in progress (i.e. Document->DMS_File[content].Upload_In_Progress_Flag = TRUE).
	
- Previous document's content upload has not finished yet (i.e. Document->DMS_File[content].External_ID is null). //Implemented, but logically not necessary - basically duplicating the previous condition.
	
- Previous document's content upload has lasted more than 20 minutes (i.e. current dateTime – Document->DMS_File[content].Update_Date > 20 minutes).
	
- applicationDetail.dmsUploadFile = FALSE


Activates the back-end part of the 01.126 Upload client document file use case again.

Localization code:
DOC_UploadRetry

## 🔗 Connections (1)

- → Dependency: [[01.126 Upload client document file]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Client documents
