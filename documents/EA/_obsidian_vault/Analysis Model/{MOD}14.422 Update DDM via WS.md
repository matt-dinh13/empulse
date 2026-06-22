---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights"
domain: "Analysis Model"
element_id: 1862008
diagrams: 7
connections: 14
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}14.422 Update DDM via WS

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights

## 📝 Notes

This technical use case describes processing of behavior of updating DDM via WS.
System call method DirectDebitService.CreateDDM(), which update DDM for chosen contract.

## 🔗 Connections (9)

- ← Dependency «invokes»: [[DirectDebitService (Interface 1699813)]]
- → NoteLink: [[updateDDM _ DirectDebitService.updateDDM]]
- → Realisation: [[REQ#3 - Restrict eMandates only to eligible bank branches and ECS providers (PAYM-805)]]
- → Dependency: [[{ADD}Algorithm_ Calculate DDM limit from parameters]]
- → UseCase: [[BSL (Actor 1880871)]]
- → Dependency: [[Algorithm_ Generate DDM code]]
- → Dependency: [[Determinate DDM valid to for contract]]
- → Dependency: [[Check and update provider on DDM]]
- → Realisation: [[14.422 Update DDM via WS]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: PAYM-1487 (CBL-3093) Standing Instruction method of DDM
- Custom: PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods
- Logical: DirectDebitService
- Logical: DirectDebitService.updateDDM
- Logical: DirectDebitServiceV5 - Update DDM
- Use Case: DDM via WS
