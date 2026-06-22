---
type: Interface
stereotype: "external interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces"
domain: "Analysis Model"
element_id: 1658805
diagrams: 1
connections: 5
tags:
  - interface
  - analysis-model
---

# 🔶 FeeStatusService

> **Type**: Interface · **Stereotype**: «external interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces

## 📝 Notes

Loxon interface for management of fees (to receive information about charging / waiving fee results). For more details see model of CamCo.

## 🔗 Connections (5)

- → Dependency «use»: [[CancelFeeResultDTO]]
- → Usage: [[ChargeFeeResultDTO]]
- ← Dependency: [[{MOD}04.140 Charge fees]]
- ← Dependency: [[{MOD}04.130 Cancel fees]]
- ← Dependency: [[03.090 Remove installment manually (UseCase 1879458)]]

## 📊 Appears In (1 diagrams)

- Logical: LCS interfaces - FeeStatusService
