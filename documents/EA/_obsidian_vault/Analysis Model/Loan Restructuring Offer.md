---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Logical Data Model"
domain: "Analysis Model"
element_id: 1701910
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Loan Restructuring Offer

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Logical Data Model

## 📝 Notes

The entity holds list of offers to loan restructuring which are returned by the approval process

## 🔗 Connections (1)

- → Aggregation: [[Loan Restructuring Request]]

## 📊 Appears In (1 diagrams)

- Logical: Loan restructuring request domain

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Annuity | Financial Amount |  |
| Interest Rate | Percentage |  |
| ChosenYN | boolean | FALSE |
| Presented Interest Rate | Percentage |  |
| Term | int |  |
| Total Monthly Payment | Financial Amount |  |
| {ADD}Provided Credit Amount | Financial Amount |  |
