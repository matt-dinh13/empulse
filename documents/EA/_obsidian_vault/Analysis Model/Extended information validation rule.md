---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773391
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Extended information validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

Each record is validated:

	
- key - must be name of codelist - Enterprise_Category,Enterprise_Subcategory,Investment_Amount or Investment_Category from Exportable codelist
	
- value - the value must be CODE of referenced codelist (in dependency on key)


Count of records of each key must be less or equal then one.

## 🔗 Connections (2)

- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- ← Dependency: [[01.312 Update approved application (UseCase 1879295)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
