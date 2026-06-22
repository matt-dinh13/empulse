---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/IN"
domain: "Analysis Model"
element_id: 1819338
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Cross validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/IN

## 📝 Notes

Two of the following values has to be filed in at least:

	
- Building
	
- Street name
	
- Locality


otherwise MSG_AT_LEAST_N_FIELDS appears.

## 🔗 Connections (4)

- ← Dependency: [[Street name (Action 1819346)]]
- ← Dependency: [[Locality (Action 1819344)]]
- ← Dependency: [[Building]]
- ← Dependency: [[{MOD}Address validation rule-IN]]

## 📊 Appears In (2 diagrams)

- Custom: Adress validation rules - IN
- Custom: Validation rules - IN
