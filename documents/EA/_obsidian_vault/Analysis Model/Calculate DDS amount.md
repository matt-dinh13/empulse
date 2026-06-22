---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753466
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate DDS amount

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

This is a general entity which stands for all possible methods how to calculate amount for direct debit statements.

For description of particular algorithms please see algorithms which are inherited from this one. Which algorithm will be used is defined on country level using system parameter PARAM_DDS_CALCULATION_ALGORITHM.

## 🔗 Connections (4)

- ← Generalization: [[Calculate all unpaid installments amount]]
- ← Generalization: [[Calculate current unpaid installment amount]]
- ← Generalization: [[Calculate standard unpaid installments amount]]
- ← Dependency: [[05.130 Generate DD statements (UseCase 1863204)]]

## 📊 Appears In (1 diagrams)

- Use Case: Direct Debit statements
