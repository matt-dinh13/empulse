---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Access Rights"
domain: "Analysis Model"
element_id: 1876220
diagrams: 3
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.540 Export DDM for confirmation

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Access Rights

## 📝 Notes

This use case is type of “asynchronous task”. It is called from << UC 01.530 Plan export of DDM for confirmation >>.

## 🔗 Connections (4)

- → Realisation: [[01.540 Export DDM for confirmation]]
- ← UseCase «include»: [[01.530 Plan export of DDM for confirmation (UseCase 1876228)]]
- → Realisation: [[Requirement2a - DDM Export]]
- ← Association: [[Time (Actor 1880869)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: PAYM-1487 (CBL-3093) Standing Instruction method of DDM
- Use Case: DDM confirmation
