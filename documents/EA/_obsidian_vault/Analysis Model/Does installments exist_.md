---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Use Case model"
domain: "Analysis Model"
element_id: 1876343
diagrams: 1
connections: 3
tags:
  - decision
  - analysis-model
---

# 🔀 Does installments exist?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Use Case model

## 🔗 Connections (3)

- → ControlFlow: [[Check if any payment is paired to installment parts with same due date as due date on input or later]]
- ← ControlFlow: [[Get all active installments and their installment parts of contract]]
- → ControlFlow: [[Display message MSG_0366]]

## 📊 Appears In (1 diagrams)

- Activity: 03.110 Perform early repayment installment schedule
