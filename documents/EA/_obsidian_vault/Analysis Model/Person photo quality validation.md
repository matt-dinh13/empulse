---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product"
domain: "Analysis Model"
element_id: 1787150
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Person photo quality validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product

## 📝 Notes

If face recognition is enabled on salesroom (where user is currently logged in), at least one of the following conditions must be met:

	
- TempAppl_Document.Photo_Taking_Result not in ('SAVED_COMPONENT', 'SAVED_UPLOAD').
	
- TempAppl_Document->TempAppl_Document_Photo_Validation[last].Result = 'VALID' / 
Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID].Result = 'VALID'.
	
- Count of TempAppl_Document_Photo_Validation records related to the respective TempAppl_Document / Document_Photo_Validation records referencing to the respective TempAppl_2_Document.UUID) >= value of global parameter faceRecognition.photoTakingCountThreshold.


If such validation fails, then:

	
- If the validation of person's photo quality in the external system is still in progress (i.e. TempAppl_Document->TempAppl_Document_Photo_Validation[last].Result = 'IN_PROGRESS' / Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID].Result = 'IN_PROGRESS'), system displays message MSG_PersonPhotoQualityValidationInProgress.
	
- Otherwise (i.e. TempAppl_Document->TempAppl_Document_Photo_Validation[last].Result != 'IN_PROGRESS' / Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID].Result != 'IN_PROGRESS') system displays message MSG_InsufficientPersonPhotoQuality along with the list of identified photo quality issues (taken from TempAppl_Document->TempAppl_Document_Photo_Validation[last]->Validation_Attempt_Detail[.Key='VALIDATION_ERROR'].Value / Document_Photo_Validation[last record where .Document_UUID=Temporary_Application->TempAppl_2_Document.UUID]->Validation_Attempt_Detail[.Key='VALIDATION_ERROR'].Value).


Note: This validation is performed only if the parameter (parameters.properties) faceRecognition.controlBySalesroomFeatureFlag = TRUE.

## 🔗 Connections (2)

- → Dependency: [[Face recognition is enabled on salesroom]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]

## 📊 Appears In (1 diagrams)

- Custom: Product validation
