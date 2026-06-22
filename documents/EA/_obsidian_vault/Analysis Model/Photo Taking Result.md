---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1773445
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Photo Taking Result

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

Visible for:
Documents associated with:

	
- DocumentContainer.documentTypes.photoAcquiringCode in ('PCM', 'PIM', 'PUM') -> field is mandatory
	
- DocumentContainer.documentTypes.photoAcquiringCode = 'PCO' -> field is optional
	
- DocumentContainer.documentTypes.photoAcquiringCode = 'PD' -> field is hidden


Disabled:

	
- For document types with flags 'PERSON' and 'PHOTO' (i.e. Document_Type->Document_Type_Flag.Type = ['PERSON' and 'PHOTO']) in case the validation of document photo quality is still in progress or already passed with success (i.e. TempAppl_Document->TempAppl_Document_Photo_Validation[last].Result in ('IN_PROGRESS', 'VALID') / Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID].Result in ('IN_PROGRESS', 'VALID')).
	
- On the 2BoD AF for the documents (Temporary_Application->TempAppl_Document) whose document photo has been taken or uploaded already on the 1BoD AF.


	
- On the 2BoD AF for the documents stored in DMS module (i.e. documents retrieved via respective API based on Temporary_Application->TempAppl_2_Document.UUID), which have a valid document file saved on them (evaluated according to the rule Evaluate if document has valid document file saved). //For documents stored in DMS module, it cannot be distinguished on what block of data the file was actually uploaded, so they are handled like the file has been created on 1BoD AF.


LDM source:

	
- Temporary_Application->TempAppl_Document->TempAppl_Document_Attribute[.Key='PHOTO_TAKING_RESULT'].Value
	
- for documents stored in DMS (Temporary_Application->TempAppl_2_Document), system calls DMS to store document attribute PHOTO_TAKING_RESULT


Other:

	
- Empty by default.
	
- Enumeration values are taken from the Photo Taking Result and filtered by the display flag (i.e. Photo_Taking_Result.Display = TRUE).


In case the current salesroom does not have a web camera and DocumentContainer.documentTypes.photoAcquiringCode = 'PCM', system sets value to 'NO_CAMERA' and the field is disabled.

When value "Photo will be included in contract package" (CP) is selected as result of photo taking, then the Take photo and Upload photo buttons are disabled and the current file (if exists) is deleted.

Localization code:
APP_PhotoTakingRresult

## 🔗 Connections (2)

- → Dependency: [[Evaluate if document has valid document file saved]]
- → Dependency: [[Photo Taking Result (Enumeration 1822517)]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for document - product AF
