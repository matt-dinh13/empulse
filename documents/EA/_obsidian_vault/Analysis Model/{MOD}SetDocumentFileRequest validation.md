---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Business Rules"
domain: "Analysis Model"
element_id: 1868141
diagrams: 5
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}SetDocumentFileRequest validation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Business Rules

## 📝 Notes

There is described set of validations for SetDocumentFileRequest data in this rule.

Format of validation: Rule definition; returned error code if validation fails

	
- documentId has to be provided; DOCUMENT_NOT_PROVIDED
	
- fileUUID has to be provided; FILEUUID_NOT_PROVIDED
	
- Document with provided documentId has to exist; DOCUMENT_NOT_EXISTS
	
- Contract related to the Document has to be in statuses defined by Supported contract statuses for self-care and K (Finished); CONTRACT_NOT_FOUND
	
- {ADD CSI-172 /}
Check for pageSpecification:
- if pageSpecification is specified then value has to be defined in Document[documentId] -> Document type -> Document Type Page specification; PAGESPECIFICATION_NOT_EXISTS
- if pageSpecification is not specified then no value has to be defined in Document[documentId] -> Document type -> Document Type Page specification; PAGESPECIFICATION_MISSING
	
- Check for fileType if it is specified:
- fileType value has to be set to FILE, PRINTOUT or SIGNATURE (or not specified, then FILE is used)
{/ADD}
	
- length of fileName can be max 128 characters; FILE_NAME_OVER_LIMIT
	
- length of filePath can be max 255 characters; FILE_NAME_OVER_LIMIT

## 🔗 Connections (1)

- ← Dependency: [[01.791 Set Document File service (UseCase 1869810)]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: CBL-4795 (CLM-1712) Create API to set document UID for document uploaded externaly to CAB
- Custom: CBL-8156 (CSI-172) Integration with Inovatrics - using PageSpecification in API (step3b)
- Logical: {ADD}Set Document File v3
- Logical: Set Document File v2
