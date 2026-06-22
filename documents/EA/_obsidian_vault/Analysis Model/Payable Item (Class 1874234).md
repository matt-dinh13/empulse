---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874234
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Payable Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

It is structure of one Installment Part Type for the Termination Installment which is calculated from the Installment Parts of the original Installments of Installment Type = STANDARD and having Due Date >= ER Due Date.

## 🔗 Connections (1)

- → Aggregation: [[Payable Items (Class 1874230)]]

## 📊 Appears In (1 diagrams)

- Logical: Early repayment result

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial amount |  |
| Part Type | Installment Part Type |  |
| Tariff Item | Tariff Item Type |  |
| Penalization start date | Date |  |
| Penalization end date | Date |  |
