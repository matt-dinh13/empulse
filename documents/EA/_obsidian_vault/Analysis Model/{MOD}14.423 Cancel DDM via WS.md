---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights"
domain: "Analysis Model"
element_id: 1862020
diagrams: 5
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}14.423 Cancel DDM via WS

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM via WS/Access Rights

## 📝 Notes

This technical use case describes processing of behavior of canceling DDM via WS.
System call method DirectDebitService.CancelDDM(), which cancel DDM for chosen contract.

## 🔗 Connections (3)

- ← Dependency «invokes»: [[DirectDebitService (Interface 1699813)]]
- → UseCase: [[BSL (Actor 1880871)]]
- → Realisation: [[14.423 Cancel DDM via WS]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: PAYM-1844 (CBL-1541) - Refactoring of create/updateDDM WS methods
- Logical: DirectDebitMandate.cancelDDM
- Logical: DirectDebitService
- Use Case: DDM via WS
