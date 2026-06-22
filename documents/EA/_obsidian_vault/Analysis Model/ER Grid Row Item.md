---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/User Interface/ER request preview"
domain: "Analysis Model"
element_id: 1586754
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ER Grid Row Item

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/User Interface/ER request preview

## 📝 Notes

General list of row items used to showing in the Early repayment result grid
Data for the items are taken from the Early Repayment Result entity (Result).
Position of each item in the Early repayment result grid is determined by "Position" number in ascending order.

## 🔗 Connections (1)

- ← Dependency: [[Full early repayment result]]

## 📊 Appears In (1 diagrams)

- Custom: Early repayment preview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Total outstanding amount to ER due date |  |  |
| - Sum of penalties |  |  |
| Total Early repayment amount |  |  |
| - Sum of principal |  |  |
| - Sum of interests |  |  |
| - Sum of fees |  |  |
| - Sum of ER fee |  |  |
| Internal Refund amount |  |  |
| Total to payment without origination  |  |  |
| Total to payment |  |  |
| Overpayment |  |  |
| Gift payment amount |  |  |
| Total prepayments |  |  |
| {ADD}Total Cancelled Insurance Amounts |  |  |
