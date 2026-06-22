---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules"
domain: "Analysis Model"
element_id: 1036865
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Concatenate person name - IN rule

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules

## 📝 Notes

For Indian configuration is person name concatenated in order:

	
- Client's additional name - Father name: First_name Middle_name Last_name
LDM: person->CustomEntryWrapper.Value where code="fathersFirstName" and "fathersMiddleName" and "fathersLastName"
	
- All names: First_name Middle_name Last_name
LDM: person.firstName+middleName+lastname

## 🔗 Connections (1)

- → Generalization: [[Concatenate person name rules]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
