---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS"
domain: "Analysis Model"
element_id: 1861853
diagrams: 1
connections: 10
tags:
  - interface
  - analysis-model
---

# 🔶 TransWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS

## 📝 Notes

This web-service provides external systems with information related to transactions.

## 🔗 Connections (10)

- → Dependency «use»: [[CancelFeesRequest]]
- → Dependency «trace»: [[04.120 Get fees (UseCase 1857223)]]
- → Dependency «trace»: [[{MOD}04.130 Cancel fees]]
- → Dependency «trace»: [[{MOD}04.140 Charge fees]]
- → Dependency «use»: [[ChargeFeesRequest]]
- → Dependency «use»: [[GetFeesFilter]]
- → Dependency «use»: [[GetPaymentsResponse]]
- → Dependency «use»: [[GetFeesResponse]]
- → Dependency «trace»: [[05.340 Get payments]]
- → Dependency «use»: [[GetPaymentsFilter]]

## 📊 Appears In (1 diagrams)

- Logical: TransWS
