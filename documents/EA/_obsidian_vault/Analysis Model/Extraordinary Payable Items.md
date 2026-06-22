---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874235
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Extraordinary Payable Items

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

The structure keeps array of items from the original Installment Parts of Installment Type = EXTRAORDINARY with due date >= ER Due Date and recalculation reason != 'GP'
It is used for regeneration of possible future extraordinary installments so that their due date equals ERDD (early repayment due date)

## 🔗 Connections (2)

- ← Aggregation: [[Extraordinary Payable Item]]
- → Aggregation: [[Early Repayment Result]]

## 📊 Appears In (1 diagrams)

- Logical: Early repayment result
