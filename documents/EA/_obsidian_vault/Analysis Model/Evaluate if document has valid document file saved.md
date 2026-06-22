---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822827
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Evaluate if document has valid document file saved

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

This object describes the steps, how system evaluates whether there is a valid document file stored for the document (stored in DMS module) or not.

Steps:

	
- System checks, if any of the following conditions is met for the processed document:

   a) Face recognition is not enabled on the salesroom where the user is currently logged in (evaluated according to the rule Face recognition is enabled on salesroom).
        AND
       Document has a file already stored on it.

   b) Face recognition is enabled on salesroom where the user is currently logged in.
        AND
       Respective document type does not have flag 'PERSON' or 'PHOTO' (i.e. Document_Type->Document_Type_Flag.Type != 'PERSON' OR Document_Type->Document_Type_Flag.Type != 'PHOTO').
        AND
       Document has a file already stored on it.

   c) Face recognition is enabled on salesroom where the user is currently logged in.
        AND
       Respective document type has flags 'PERSON' and 'PHOTO' (i.e. Document_Type->Document_Type_Flag.Type = ['PERSON' and 'PHOTO']).
        AND
       [ Validation of document photo quality already passed with success (i.e. Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID].Result = 'VALID') 
        OR count of Document_Photo_Validation records referencing to the respective TempAppl_2_Document.UUID) >= value of global parameter faceRecognition.photoTakingCountThreshold. ]

If it is, then the processed document has a valid document file saved on it (and algorithm returns TRUE to the calling object).
Otherwise a valid file is not present on the respective document (and algorithm returns FALSE to the calling object).
	
- Algorithm ends.

## 🔗 Connections (4)

- ← Dependency: [[Take photo (GUIElement 1773453)]]
- ← Dependency: [[Upload photo]]
- ← Dependency: [[Photo Taking Result]]
- → Dependency: [[Face recognition is enabled on salesroom]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
