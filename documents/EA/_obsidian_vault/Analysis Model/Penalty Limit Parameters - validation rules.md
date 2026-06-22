---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Logical Data Model"
domain: "Analysis Model"
element_id: 1836321
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Penalty Limit Parameters - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Logical Data Model

## 📝 Notes

- ValidFrom - mandatory
	
- ValidTo - optional for the interval with the highest ValidFrom else mandatory,
	
- ValidTo >= ValidFrom
	
- Each validity interval cannot cross the other validity intervals, i.e. both ValidFrom either ValidTo cannot be inside another interval
	
- Percentage - mandatory, >= 0
	
- Period - mandatory, from Penalty Limit Period Type

## 🔗 Connections (1)

- ← Dependency: [[Penalty Limit Parameters]]

## 📊 Appears In (1 diagrams)

- Logical: Penalties Limit Parameters
