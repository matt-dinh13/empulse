---
type: Requirement
stereotype: "Business rule"
package: ""
domain: "_Uncategorized"
element_id: 1731367
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Update document validations

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: N/A

## 📝 Notes

Description: 
Rule describing validations for document update by external system.

Input: 
- documentId
- documentType
- documentAttributes

Output: 
- resultCode
- attributeCode (optional)
- errorMessageCode (optional)

Steps: 

	
- Search for Document where External ID (Note: table DOCUMENT.DOCUMENT_REF) = documentId
- if no document found then set resultCode = INVALID_DATA, attributeCode = documentId, errorMessageCode = DOCUMENT_NOT_EXIST
	
- Check document -> Document Type.Code = documentType
-if not then set resultCode = INVALID_DATA, attributeCode = documentType, errorMessageCode = DOCUMENT_TYPE_NOT_CORRECT
	
- {ADD CLM-2546}documentAttributes of the Document Attribute Type of PROOF_CHECK and SIGN_METHOD are excluded with update and validation (it is not taken into account){/ADD}
	
- For each docAttribute in documentAttributes check document -> Document Attribute -> Document Type Attribute.Code = docAttribute.code
- if not set resultCode = INVALID_DATA, attributeCode = docAttribute.code, errorMessageCode = DOCUMENT_ATTRIBUTE_NOT_EXIST
- if docAttribute with corresponding Code found but there is no Value assigned then set resultCode = INVALID_DATA, attributeCode = docAttribute.code, errorMessageCode = DOCUMENT_ATTRIBUTE_NO_VALUE
	
- Else set resultCode = OK
	
- Return resultCode, attributeCode, errorMessageCode
