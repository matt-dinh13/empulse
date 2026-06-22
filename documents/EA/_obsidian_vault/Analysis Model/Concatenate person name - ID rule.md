---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules"
domain: "Analysis Model"
element_id: 1036866
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Concatenate person name - ID rule

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules

## 📝 Notes

For Indonesian configuration is person name concatenated in order:

	
- Client's additional name - Mother name: First_name Middle_name Last_name
LDM: person.mothersMaidenName
	
- All names: First_name Middle_name Last_name
LDM: person.firstName+middleName+lastName

## 🔗 Connections (1)

- → Generalization: [[Concatenate person name rules]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
