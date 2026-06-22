---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules"
domain: "Analysis Model"
element_id: 1246502
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Higher then minimal installment

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules

## 📝 Notes

Validations:
Value must be equal or higher than Financial Parameters.Minimal Installment Amount
If not, MSG_DDMRegularAmountHigherOfEqualThanMinimalInstallment

## 🔗 Connections (1)

- ← Dependency: [[DDM regular payment amount]]

## 📊 Appears In (1 diagrams)

- Custom: Create DDM
