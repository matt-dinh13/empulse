---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773436
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 SearchApplicationCriteria validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- status - only values T, P, R, S, N, D are allowed.


	
- substatus - must be value of Contract SubStatus
	
- event - each record is validated according to SearchApplicationEvent validation
	
- CUID


At least one of values event or CUID must be filled (does not apply if user has access right 01.164 Search for application - without search criteria).

Some of these attributes has its own country specific validations:
IN - SearchApplicationCriteria validation - IN

## 🔗 Connections (4)

- → Dependency: [[SearchApplicationEvent validation]]
- → Dependency: [[01.164 Search for application - without search criteria]]
- ← Dependency: [[Search application validation rule]]
- ← Generalization: [[SearchApplicationCriteria validation - IN]]

## 📊 Appears In (1 diagrams)

- Custom: Search Validation Rules
