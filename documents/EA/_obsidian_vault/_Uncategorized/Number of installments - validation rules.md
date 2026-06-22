---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 1275708
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 Number of installments - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

Cross validation:


	
- Number of installments to >= Number of installments from. (MSG_NUMBER_OF_INSTALLMENTS_INTERVAL)



	
- Intervals (number of installments from/to) must be disjoint set (not crossing each other) for the same FER service. (MSG_NUMBER_OF_INSTALLMENTS_DISJOINT_INTERVAL)

## 🔗 Connections (2)

- ← Dependency: [[Number Of Installments From]]
- ← Dependency: [[Number Of Installments To]]
