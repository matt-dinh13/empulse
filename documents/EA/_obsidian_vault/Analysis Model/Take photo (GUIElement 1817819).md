---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF"
domain: "Analysis Model"
element_id: 1817819
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Take photo

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF

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

	
- All the editable documents in case the current salesroom has a web camera and signing of consent via OTP enabled (i.e. Salesroom.Web_Cam = TRUE and Salesroom.Sign_Consent_Via_OTP = TRUE (it is retrieved from the Salesroom Rest Controller API GET) and DocumentContainer.documentTypes.photoAcquiringCode not in ('PUM', 'PD') and user clicked the Reset verification button.


Disabled for:

	
- 2BoD AF in case the document photo has been already uploaded or taken during the 1BoD AF filling.


Other:
When the user is able to add/remove/update document, he/she is also able to take a document's photo.

Localization code:
APP_TakeDocumentPhoto

## 🔗 Connections (2)

- ← Generalization: [[Take photo (GUIElement 1572629)]]
- → Dependency: [[01.085 Capture Photo]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for consent - product AF
