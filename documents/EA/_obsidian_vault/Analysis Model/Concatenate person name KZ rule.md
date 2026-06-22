---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules"
domain: "Analysis Model"
element_id: 1036867
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Concatenate person name KZ rule

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules

## 📝 Notes

For Kazakh configuration is person name concatenated in order:

	
- Client's additional name - Name in latin: Last_name First_name
LDM: person->CustomEntryWrapper.Value where code="firstNameLat" and "lastNameLat"
	
- All names: Last_name First_name Middle_name
LDM: person.lastName+firstName+middleName

## 🔗 Connections (1)

- → Generalization: [[Concatenate person name rules]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
