---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights"
domain: "Analysis Model"
element_id: 1862019
diagrams: 8
connections: 14
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}14.421 Create DDM via WS

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights

## 📝 Notes

This technical use case describes processing of behavior of creating DDM via WS.
System call method DirectDebitService.CreateDDM(), which create DDM for chosen contract.

## 🔗 Connections (9)

- ← Dependency: [[DirectDebitService (Interface 1699813)]]
- → NoteLink: [[createDDM _ DirectDebitService.createDDM]]
- → Dependency: [[{ADD}Algorithm_ Calculate DDM limit from parameters]]
- → Realisation: [[REQ#3 - Restrict eMandates only to eligible bank branches and ECS providers (PAYM-805)]]
- → Dependency: [[Check and update provider on DDM]]
- → UseCase: [[BSL (Actor 1880871)]]
- → Realisation: [[14.421 Create DDM viaWS]]
- → Dependency: [[Determinate DDM valid to for contract]]
- → Dependency: [[Algorithm_ Generate DDM code]]

## 📊 Appears In (8 diagrams)

- Custom: Access Rights
- Custom: CBL-4161 (CLM-1598)  Add co-lending partner information in ContractFullInfo and DDM WS
- Custom: PAYM-1487 (CBL-3093) Standing Instruction method of DDM
- Custom: PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods
- Logical: DirectDebitService
- Logical: DirectDebitService.createDDM
- Logical: DirectDebitServiceV5 - Create DDM
- Use Case: DDM via WS
