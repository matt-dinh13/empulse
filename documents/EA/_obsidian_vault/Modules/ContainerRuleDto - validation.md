---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules"
domain: "Modules"
element_id: 1845095
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 ContainerRuleDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules

## 📝 Notes

ContainerRuleDto - POST
 

	
- documentContainerCode
must exists in list obtained by Get list of Document Containers with attribute activeOnly = true
[INVALID_DOCUMENT_CONTAINER]
	
- minCountOfDocuments
must fulfill Maximal number of documents
[INVALID_NUMBER]
	
- whenRequiredIn2SP
must exists in 2SP Block of Data Type 2SP Block of Data Type
[REQUIRED]
	
- clientScoringSegmentCodes
must exists in Client Scoring Segment
[INVALID_CLIENT_SCORING_SEGMENT]

## 🔗 Connections (2)

- → Dependency: [[Maximal number of documents]]
- ← Dependency: [[Product - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
