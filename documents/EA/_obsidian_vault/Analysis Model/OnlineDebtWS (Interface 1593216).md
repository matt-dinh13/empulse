---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/OnlineDebtWS"
domain: "Analysis Model"
element_id: 1593216
diagrams: 1
connections: 6
tags:
  - interface
  - analysis-model
---

# 🔶 OnlineDebtWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/OnlineDebtWS

## 📝 Notes

Web service used to deliver information about debt catalogue of selected contract on demand of external system.

## 🔗 Connections (6)

- → Usage: [[GetDebtStatRequest]]
- → Usage: [[GetDebtStatResponse]]
- → Dependency «use»: [[GetOnlineDebtResponse]]
- → Dependency: [[CalculateDebtRequest]]
- → Dependency: [[CalculateDebtResponse]]
- → Dependency «use»: [[GetOnlineDebtRequest]]

## 📊 Appears In (1 diagrams)

- Logical: OnlineDebtWS
