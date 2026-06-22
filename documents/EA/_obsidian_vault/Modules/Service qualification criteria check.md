---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1855355
diagrams: 5
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Service qualification criteria check

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Inputs:

	
- Service
	
- List of qualification criteria (type, values)


Check only if QUALIFICATION_CRITERIA_ENABLED flag is on service.

If NO qualification criteria is assigned on service then return true.

For each Service.QualificationCriteria (type, value) must exist QualificaitonCriteria (type, value) from input to return true. If not return false.

## 🔗 Connections (5)

- ← Dependency: [[{DEL}Insurance determination]]
- ← Dependency: [[{DEL}Service determination]]
- ← Dependency: [[{MOD}NEW Service determination]]
- ← Dependency: [[POST product recalculation data - service]]
- ← Dependency: [[Service - validation]]

## 📊 Appears In (5 diagrams)

- Custom: Calculate product offer
- Custom: Product and Service selection
- Custom: Validation Rules
- Custom: Validation Rules
- Use Case: Use Case
