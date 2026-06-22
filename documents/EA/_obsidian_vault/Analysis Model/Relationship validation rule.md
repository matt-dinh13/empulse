---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773398
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Relationship validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- type - must be value of Role Type.Code
	
- party  - each element is validated according to the Party validation rule
	
- attributes - each subordinate .attribute record is validated according to the Relationship attribute validation rule

## 🔗 Connections (3)

- → Dependency: [[Party validation rule]]
- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[Relationship attribute validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
