---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874233
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ER Fee Items

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

The structure keeps array of fees which are to be charged for ER.
Each fee defined as Tariff Item (where TariffItemType.Usage = usage defined on input of calculation, which corresponds with processed service type, e.g. PR for partial early repayment) in valid Tariff is calculated separately and stored in the ER Fee Item structure.

## 🔗 Connections (2)

- → Aggregation: [[Early Repayment Result]]
- ← Aggregation: [[ER Fee Item]]

## 📊 Appears In (1 diagrams)

- Logical: Early repayment result

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Sum of ER Fees | Financial Amount |  |
