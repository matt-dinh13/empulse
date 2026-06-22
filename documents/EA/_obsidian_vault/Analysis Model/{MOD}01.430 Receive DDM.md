---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Access rights"
domain: "Analysis Model"
element_id: 1782313
diagrams: 4
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.430 Receive DDM

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Access rights

## 📝 Notes

Purpose of this use case is additional registration - to receive direct debit mandate and enter corrected information if necessary. For new contracts is process of Receiving Direct Debit Mandate performed within the {MOD}01.270 Register contract manually

## 🔗 Connections (5)

- → Realisation: [[01.430 Receive DDM]]
- → Dependency: [[Check and update provider on DDM]]
- → Realisation: [[Req 1_ Direct debits as available repayment channel in Indonesia]]
- ← Dependency: [[Receive (GUIElement 1784588)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access rights
- Custom: PAYM-1487 (CBL-3093) Standing Instruction method of DDM
- Custom: Tab-Direct debit mandates
- Use Case: Create/Update/Receive DDM
