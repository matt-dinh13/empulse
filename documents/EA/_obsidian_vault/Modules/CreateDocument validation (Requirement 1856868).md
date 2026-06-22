---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Business rules"
domain: "Modules"
element_id: 1856868
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 CreateDocument validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Business rules

## 📝 Notes

There is described set of validations for Create Document Request values (used by CreateDocument).

Inputs:

	
- CreateDocumentRequest


Format of validation: Rule definition; returned error list if validation fails
 

	
- documentType has to exists in the Document Type entity; DOCUMENT_TYPE_NOT_FOUND
	
- Attribute array is validated by the rule Document Attribute validation; returned error list
	
- File array is validated by the rule Document File validation; returned error list

## 🔗 Connections (3)

- ← Dependency: [[14.010 Create Document (UseCase 1856713)]]
- → Dependency: [[Document Attribute validation (Requirement 1856867)]]
- → Dependency: [[Document File validation]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Document services - Use Case Model
