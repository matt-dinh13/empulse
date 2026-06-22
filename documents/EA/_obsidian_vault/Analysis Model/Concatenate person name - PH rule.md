---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules"
domain: "Analysis Model"
element_id: 1036870
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Concatenate person name - PH rule

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules

## 📝 Notes

For PH configuration is person name concatenated in order:
1. Client's full name: First_name, Middle_name, Last_name, Honour After
LDM: person.firstName+middleName+lastname+honourAfterName
2. Client's additional name: Mother_maiden_name
LDM: person.mothersMaidenName

## 🔗 Connections (1)

- → Generalization: [[Concatenate person name rules]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
