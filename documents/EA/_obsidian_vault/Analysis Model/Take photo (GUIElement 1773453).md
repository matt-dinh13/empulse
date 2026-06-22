---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1773453
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Take photo

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

Activates the use case 01.085 Capture Photo with following parameters on the input:

	
- PHOTO_CAPTURE_MODE = 'D' for document types without flag 'PHOTO'
	
- PHOTO_CAPTURE_MODE = 'P' for document types with flag 'PHOTO'
	
- MultiPhotoFormat = value of Document_Type.Multi_Photo_Format
	
- ParamPhotoDocAmountLimit:
   - When the photo is for the particular document page (i.e. Page_Specification is not null), then ParamPhotoDocAmountLimit = 1.
   - Otherwise ParamPhotoDocAmountLimit = value of global parameter PhotoAmountLimitInComponent.


When the photo component returns the result, it is stored into the related data structure. In case the photo of the document is already taken, then photo component window does not contain it.

Visible for:

	
- All the editable documents in case the current salesroom has a web camera (i.e. Salesroom.Web_Cam = TRUE is retrieved from the Salesroom Rest Controller API GET) and DocumentContainer.documentTypes.photoAcquiringCode not in ('PUM', 'PD').


Disabled for:

	
- Document types with flags 'PERSON' and 'PHOTO' (i.e. Document_Type->Document_Type_Flag.Type = ['PERSON' and 'PHOTO']) in case the validation of document photo quality is still in progress or already passed with success (i.e. TempAppl_Document->TempAppl_Document_Photo_Validation[last].Result in ('IN_PROGRESS', 'VALID') / Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID].Result in ('IN_PROGRESS', 'VALID')).
	
- On the 2BoD AF for the documents (Temporary_Application->TempAppl_Document) whose document photo has been taken or uploaded already on the 1BoD AF.


	
- On the 2BoD AF for the documents stored in DMS module (i.e. documents retrieved via respective API based on Temporary_Application->TempAppl_2_Document.UUID), which have a valid document file saved on them (evaluated according to the rule Evaluate if document has valid document file saved). //For documents stored in DMS module, it cannot be distinguished on what block of data the file was actually uploaded, so they are handled like the file has been created on 1BoD AF.


Other:

	
- When the user is able to add/remove/update document, he/she is also able to take a document's photo.


Localization code:
APP_TakeDocumentPhoto

## 🔗 Connections (2)

- → Dependency: [[01.085 Capture Photo]]
- → Dependency: [[Evaluate if document has valid document file saved]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for document - product AF
