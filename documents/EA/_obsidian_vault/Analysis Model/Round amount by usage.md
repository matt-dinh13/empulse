---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Rounding/Business Rules"
domain: "Analysis Model"
element_id: 1166385
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Round amount by usage

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Rounding/Business Rules

## 📝 Notes

Input:

	
- amount
	
- usage       ...i.e. RoundingDefinitionUsageType


Output:

	
- rounded amount   


Algorithm:

	
- System finds an active record in RoundingDefinition where usage = passed usage.
If no record is found, the algorithm amount on the input (i.e. without rounding).

	
- System rounds passed amount with method and scale defined by found rounding definition according to the rule Rounding and returns it on the output.

## 🔗 Connections (2)

- → Dependency: [[Rounding (Requirement 1166384)]]
- ← Dependency: [[13.060 Create change credit limit request manually (UseCase 1877196)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Change credit limit manually
