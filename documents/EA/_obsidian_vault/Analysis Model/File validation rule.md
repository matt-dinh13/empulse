---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773426
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 File validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

//Applicable for ApplicationManagementWS v19-v21.

	
- content - mandatory when externalId is null (otherwise forbidden)
	
- externalId - mandatory when content is null (otherwise forbidden)
	
- filename - mandatory when content is not null (otherwise forbidden), File name validation
	
- pageSpecificationCode
- mandatory when any Document Type Page Specification is defined for respective document type (only page specification with merged_file = 0 are taken into account), otherwise forbidden
- must be value of applicable Document Type Page Specification.Code,
- must be unique for respective document

## 🔗 Connections (3)

- → Dependency: [[File name validation]]
- ← Dependency: [[{MOD}Document validation rule]]
- ← Dependency: [[{DEL}01.176 Create document]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
