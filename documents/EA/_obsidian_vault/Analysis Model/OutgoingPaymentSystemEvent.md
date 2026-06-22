---
type: Class
stereotype: "abstract"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model"
domain: "Analysis Model"
element_id: 1876528
diagrams: 3
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 OutgoingPaymentSystemEvent

> **Type**: Class · **Stereotype**: «abstract»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model

## 🔗 Connections (6)

- → Generalization: [[SystemEvent]]
- → Dependency «processed by»: [[{MOD}System event processing]]
- ← Generalization: [[{ADD}OutgoingPaymentCreatedSE]]
- ← Generalization: [[OutgoingPaymentCanceledSE]]
- ← Generalization: [[{ADD}JFSAccountOpenedSE]]
- ← Generalization: [[CreateOutgoingPaymentOrderEvent]]

## 📊 Appears In (3 diagrams)

- Logical: COMMON for system events
- Logical: OutgoingPaymentSystemEvent
- Use Case: System events processing
