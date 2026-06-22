---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics"
domain: "Requirements Model"
element_id: 1731364
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}UploadDocumentFileRequest validations

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics

## 📝 Notes

There is described set of validations for UploadDocumentFileRequest data in this rule.

Format of validation: Rule definition; returned UploadDocumentFileFault if validation fails
 

	
- Document with provided documentId has to exist; DOCUMENT_NOT_EXISTS
	
- A Contract with contractCode has to exists in the Contract entity; CONTRACT_NOT_FOUND
	
- The Contract has a Client (CUID) associated; CLIENT_IS_MISSING
	
- The Document has to have relation to the provided Contract either via Document -> Contract Document -> Contract, or Document -> Client Document -> Client Snapshot -> Deal -> Contract, or Document -> DDM Document -> DDM -> Contract; INVALID_DATA
	
- {ADD CSI-172 /}
Check for pageSpecification:
- if pageSpecification is specified then value has to be defined in Document[documentId] -> Document type -> Document Type Page specification; PAGESPECIFICATION_NOT_EXISTS
- if pageSpecification is not specified then no value has to be defined in Document[documentId] -> Document type -> Document Type Page specification; PAGESPECIFICATION_MISSING
{/ADD}
	
- Check for documentFile: 
- file size in documentFile.data has to be greater than 0; INVALID_DATA
- file size in documentFile.data has to be lower than value in Global Parameter.MaxFileSize; FILE_SIZE_OVER_LIMIT
- length of documentFile.fileName (with file extension) can be 128 characters; FILE_NAME_OVER_LIMIT

## 📊 Appears In (1 diagrams)

- Custom: CBL-8156 (CSI-172) Integration with Inovatrics - using PageSpecification in API (step3b)
