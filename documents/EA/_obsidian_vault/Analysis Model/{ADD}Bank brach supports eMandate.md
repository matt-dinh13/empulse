---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules"
domain: "Analysis Model"
element_id: 1246503
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Bank brach supports eMandate

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Validation Rules

## 📝 Notes

{ADD CBL-2504 PAYM-805 /}
If DDM.eMandate = true, then DDM->Bank Account->Bank Branch.eMandate Support = true

MSG_BankBranchDoesNotSupportEMandate

## 🔗 Connections (1)

- ← Dependency: [[{DEL}eMandate (GUIElement 1869644)]]

## 📊 Appears In (2 diagrams)

- Custom: eMandate validations
- Custom: IN - specific - DDM Header
