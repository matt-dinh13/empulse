---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Business rules"
domain: "Modules"
element_id: 1856867
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Document Attribute validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Business rules

## 📝 Notes

There is described set of validations for Document Attribute array values (used by CreateDocument and SetDocumentAttribute).

Inputs:

	
- Document Attribute array (Code + Value)
	
- Document Type


Format of validation: Rule definition; returned error list if validation fails
If global setting UseDMSDocTypeDef = true then Document Type definition from DMS scheme is used instead of HO scheme

Following validations are used independently for each item from the Document Attribute array:

	
- Code is defined for the Document Type (Document Type - > Document Type Attribute.Code) or is defined with Document Type Attribute.Document Type Code = ALL_DOCUMENT_TYPES; ATTRIBUTE_NOT_EXISTS
	
- Value is NULL or of the specific type defined by Document Type -> Document Type Attribute.Custom Data Type Code; INVALID_ATTRIBUTE_DATATYPE
	
- Value is NULL or meets validation defined by custom data library for Document Type -> Document Type Attribute.Custom Data Type Code;  INVALID_ATTRIBUTE_VALUE (error list provided by custom data library)
	
- Value is NULL or meets limitation defined by Document Type -> Document Type Attribute.Length Min and Length Max (for text),  Value Min and Value Max (for numeric and amount); INVALID_ATTRIBUTE_VALUE with error reason



Following validation checks combination through all items in Document Attribute array:

	
- Code is unique {ADD TFT-10580}except code PROOF_CHECK which can be defined more times in one request{/ADD}; ATTRIBUTE_DUPLICITY

## 🔗 Connections (2)

- ← Dependency: [[CreateDocument validation (Requirement 1856868)]]
- ← Dependency: [[14.040 Set Document Attribute (UseCase 1856717)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Document services - Use Case Model
