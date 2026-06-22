---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Access rights"
domain: "Analysis Model"
element_id: 1782316
diagrams: 5
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.425 Update DDM

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/Create/Update/Receive DDM/Access rights

## 📝 Notes

Purpose of this use case is to update existing Direct Debit Mandate (DDM). This is a visual use case.

## 🔗 Connections (8)

- → Realisation: [[Req 1_ Direct debits as available repayment channel in Indonesia]]
- → Dependency: [[Check and update provider on DDM]]
- → Realisation: [[01.425 Update DDM]]
- → UseCase «include»: [[{MOD}01.668 Create request for change disbursement channel]]
- → Realisation: [[01.425 Update DDM (all contract statuses)]]
- → Realisation: [[REQ#4 - Take eMandete flag into account during create_update DDM via UI]]
- ← Dependency: [[Update (GUIElement 1784608)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (5 diagrams)

- Custom: Access rights
- Custom: PAYM-1487 (CBL-3093) Standing Instruction method of DDM
- Custom: PAYM-1613 - other methods
- Custom: Tab-Direct debit mandates
- Use Case: Create/Update/Receive DDM
