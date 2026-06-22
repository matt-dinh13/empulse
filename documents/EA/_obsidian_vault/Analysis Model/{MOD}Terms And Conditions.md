---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model"
domain: "Analysis Model"
element_id: 1819825
diagrams: 5
connections: 7
tags:
  - enumeration
  - analysis-model
---

# 📝 {MOD}Terms And Conditions

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model

## 📝 Notes

Terms and conditions define frame of rules for product/service, pairing priority properties .

## 🔗 Connections (7)

- ← Aggregation: [[Pay-off Date Calculation Parameter]]
- → Association: [[Pay-off installment date parameters]]
- ← Association: [[Installment Included In Operation]]
- ← Association: [[Pairing Setting]]
- ← Dependency: [[Terms and conditions]]
- ← Association: [[{MOD}Product]]
- ← Dependency: [[Service (Class 1880804)]]

## 📊 Appears In (5 diagrams)

- Logical: Installment Schedule
- Logical: Loan Service Structure
- Logical: Pairing priority
- Logical: Pay-off installment date 
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Description | Text |  |
| Name | Text |  |
| {ADD}Eligibility | string |  |
| Active | Boolean | true |
| Keep Pairing Priority | Boolean |  |
