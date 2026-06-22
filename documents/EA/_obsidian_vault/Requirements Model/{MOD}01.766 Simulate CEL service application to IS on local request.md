---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans"
domain: "Requirements Model"
element_id: 1414318
diagrams: 3
connections: 4
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}01.766 Simulate CEL service application to IS on local request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans

## 📝 Notes

This technical use case simulates application of a service to an installment schedule and returns information about IS changes after the application.

## 🔗 Connections (4)

- ← Dependency: [[REQ#1 - Calculate FER amount]]
- ← Dependency: [[InstallmentServiceWS (Interface 1414296)]]
- → Realisation: [[01.766 Simulate CEL service application to IS on local request]]
- → Realisation: [[Create function for calculating expected gift payment amount for a given contract and a given recalc]]

## 📊 Appears In (3 diagrams)

- Custom: IS-7 (CBL-29) Consolidation (Top up) for cash loans
- Logical: InstallmentServiceWS
- Use Case: OVERVIEW - Installment Schedule
