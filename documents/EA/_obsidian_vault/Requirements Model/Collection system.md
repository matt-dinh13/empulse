---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-5043 (CBL-18002) - Pay-off refactoring"
domain: "Requirements Model"
element_id: 1880865
diagrams: 13
connections: 12
tags:
  - actor
  - requirements-model
---

# 👤 Collection system

> **Type**: Actor
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-5043 (CBL-18002) - Pay-off refactoring

## 📝 Notes

This user stands for external system used for activities related to collections (e.g. Loxon Collection System - LCS).

## 🔗 Connections (12)

- ← UseCase: [[01.501 Pay-off CEL contract from external system]]
- → UseCase: [[{ADD}01.565 Write-off contracts from external system]]
- → UseCase: [[01.471 Get debt catalogue for external system (UseCase 1876068)]]
- → UseCase: [[01.478 Show supposed debt for CEL contract (UseCase 1876077)]]
- → UseCase: [[04.120 Get fees (UseCase 1857223)]]
- → UseCase: [[05.340 Get payments]]
- → UseCase: [[{MOD}04.140 Charge fees]]
- → UseCase: [[01.410 Pay-off contract manually (UseCase 1878655)]]
- → UseCase: [[03.160 Get Installment Schedule (UseCase 1879437)]]
- → UseCase: [[{MOD}04.130 Cancel fees]]
- → UseCase: [[01.740 Process notification about credit account closure (UseCase 1839633)]]
- → UseCase: [[03.170 Get Next Regular Installment (UseCase 1879464)]]

## 📊 Appears In (13 diagrams)

- Custom: CLM-5043 (CBL-18002) - Pay-off refactoring
- Logical: ContractStatusWS
- Logical: installmentSchedule
- Logical: installmentScheduleRestAPI v2
- Logical: InstallmentScheduleWS
- Logical: OnlineDebt
- Logical: OnlineDebtWS
- Logical: TransWS
- Use Case: Actors
- Use Case: Contract debt tracking
- Use Case: Debt calculator
- Use Case: Fee services used by external system (Collection)
- Use Case: Pay-off contract manually
