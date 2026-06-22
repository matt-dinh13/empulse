---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product"
domain: "Analysis Model"
element_id: 1787145
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Not lower than minimal installment

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product

## 📝 Notes

Validations:
Value must be higher or equal than Offer_financial_parameters.Minimal_installment_amount
If not, MSG_HigherThanMinimalInstallment

## 🔗 Connections (1)

- ← Dependency: [[Regular payment amount (Action 1787161)]]

## 📊 Appears In (1 diagrams)

- Custom: Product validation
