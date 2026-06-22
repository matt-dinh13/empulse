---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1773448
diagrams: 2
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Validation of photo is in progress

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

Displayed only for:

	
- Document types with flags 'PERSON' and 'PHOTO' (i.e. Document_Type->Document_Type_Flag.Type = ['PERSON' and 'PHOTO']).


Visible only if the validation of the document photo quality is still in progress (i.e. TempAppl_Document->TempAppl_Document_Photo_Validation[last].Result = 'IN_PROGRESS' / Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID].Result = 'IN_PROGRESS').

Other:
Displayed along with the loading wheel icon (indicating, that the photo validation is in progress).

Localization code:
MSG_ValidationInProgress

## 📊 Appears In (2 diagrams)

- Custom: Common panel for document - product AF
- Custom: LOR-8824 - Remove functionality related to global parameter DOCUMENT_QUALITY_CHECK
