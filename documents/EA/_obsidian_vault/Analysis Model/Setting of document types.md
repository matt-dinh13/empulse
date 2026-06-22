---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Type Definition/Business Rules"
domain: "Analysis Model"
element_id: 1819379
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Setting of document types

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Type Definition/Business Rules

## 📝 Notes

All the following rules are applicable for document types.


	
- A document type must have at least one of the following flags (Document_Type->Document_Type_Flag):
- Related to Person (personal document type)
- Related to Contract
- Related DDM
Otherwise system is not able to create a document based on the given document type.
	
- Primary identification container can contain only primary identification document types.
	
- Only identification document types can be additionally marked as primary identification.
	
- Only personal document types can be additionally marked as identification document types.
	
- An identification document type must have exactly one DOC_ID attribute that is mandatory.
	
- To a container only personal documents (documents that have flag 'PERSON' and do not have flags 'CONTARCT' or 'DDM') can be added.
	
- Product_Profile_to_Document_Type has to define only non-personal documents
In order to avoid duplicities - personal documents are inputted manually based on process flow.
	
- All Document types with Product_Profile_to_Document_Type.When_Required = 'CR' have to has flag 'Part_of_credit_documentation'



Recommendation: Documents with WHEN_REQUIRED = CIC should have WHEN_PRINTABLE = CIC

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
