---
type: Class
stereotype: "enum"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1869495
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PER Type

> **Type**: Class · **Stereotype**: «enum»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

It determines way of the installment schedule regeneration; either decreasing number of terms or annuity

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Partial Early Repayment Service]]
- ← Dependency: [[Early Repayment Request]]

## 📊 Appears In (2 diagrams)

- Logical: Early repayment request
- Logical: Partial early repayment setting

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CHOICE |  |  |
| LOWER_ANNUITY |  |  |
| SHORTER_TERM |  |  |
