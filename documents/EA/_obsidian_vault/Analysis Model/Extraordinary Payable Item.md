---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874222
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Extraordinary Payable Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

It is structure of one Installment Part Type for the Termination Installment which is calculated from the Installment Parts of the original Installments of Installment Type = EXTRAORDINARY having Due Date >= ER Due Date and recalculation reason != 'GP'.

## 🔗 Connections (1)

- → Aggregation: [[Extraordinary Payable Items]]

## 📊 Appears In (1 diagrams)

- Logical: Early repayment result

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial amount |  |
| Part Type | Installment Part Type |  |
| Tariff Item | Tariff Item Type |  |
