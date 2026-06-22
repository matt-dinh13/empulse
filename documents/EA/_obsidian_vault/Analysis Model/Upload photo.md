---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1773450
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Upload photo

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

Activates the use case 01.088 Upload file.

Visible for:
All the editable documents associated with:

	
- DocumentContainer.documentTypes.photoAcquiringCode in ('PCU', 'PUM')
	
- DocumentContainer.documentTypes.photoAcquiringCode = 'PIM' in case the current salesroom does not have a web camera


Disabled for:

	
- Document types with flags 'PERSON' and 'PHOTO' (i.e. Document_Type->Document_Type_Flag.Type = ['PERSON' and 'PHOTO']) in case the validation of document photo quality is still in progress or already passed with success (i.e. TempAppl_Document->TempAppl_Document_Photo_Validation[last].Result in ('IN_PROGRESS', 'VALID') / Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID].Result in ('IN_PROGRESS', 'VALID')).
	
- On the 2BoD AF for the documents (Temporary_Application->TempAppl_Document) whose document photo has been taken or uploaded already on the 1BoD AF.


	
- On the 2BoD AF for the documents stored in DMS module (i.e. documents retrieved via respective API based on Temporary_Application->TempAppl_2_Document.UUID), which have a valid document file saved on them (evaluated according to the rule Evaluate if document has valid document file saved). //For documents stored in DMS module, it cannot be distinguished on what block of data the file was actually uploaded, so they are handled like the file has been created on 1BoD AF.


Localization code:
APP_UploadDocumentPhoto

## 🔗 Connections (3)

- → Dependency: [[Evaluate if document has valid document file saved]]
- → Dependency: [[01.088 Upload file (UseCase 1819817)]]
- → Dependency: [[Allowed file format for client's photo upload]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for document - product AF
