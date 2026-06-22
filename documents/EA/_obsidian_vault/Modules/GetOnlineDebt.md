---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/OnlineDebt"
domain: "Modules"
element_id: 1795945
diagrams: 1
connections: 9
tags:
  - interface
  - modules
---

# 🔶 GetOnlineDebt

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/OnlineDebt

## 📝 Notes

{ADD CBL-15488 IS-1544}
Rest api used to deliver information about debt catalogue of selected contract on demand of external system.

## 🔗 Connections (9)

- → Dependency: [[01.483 Calculate debt on external request (UseCase 1876070)]]
- → Dependency: [[01.481 Get debt statistics (UseCase 1876081)]]
- → Dependency: [[GetOnlineDebtResponse (Class 1795949)]]
- → Dependency: [[CalculateDebtRequest (Class 1795947)]]
- → Dependency: [[GetDebtStatRequest (Class 1795950)]]
- → Dependency: [[01.471 Get debt catalogue for external system (UseCase 1876068)]]
- → Dependency: [[GetDebtStatResponse (Class 1795948)]]
- → Dependency: [[GetOnlineDebtRequest (Class 1795943)]]
- → Dependency: [[CalculateDebtResponse (Class 1795942)]]

## 📊 Appears In (1 diagrams)

- Logical: OnlineDebt
