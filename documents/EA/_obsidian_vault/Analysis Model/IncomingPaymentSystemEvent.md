---
type: Class
stereotype: "abstract"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model"
domain: "Analysis Model"
element_id: 1234875
diagrams: 4
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 IncomingPaymentSystemEvent

> **Type**: Class · **Stereotype**: «abstract»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model

## 🔗 Connections (7)

- ← Generalization: [[InternalIncomingPaymentSE]]
- → Dependency «processed by»: [[{MOD}System event processing]]
- ← Generalization: [[IncomingPaymentPairingChangedCELSE]]
- → Association: [[Incoming Payment]]
- → Generalization: [[SystemEvent]]
- ← Generalization: [[IncomingPaymentManualPairingCELSE]]
- ← Generalization: [[IncomingPaymentPairingNotificationSE]]

## 📊 Appears In (4 diagrams)

- Logical: COMMON for system events
- Logical: IncomingPaymentSystemEvent schema
- Logical: Logical Data Model
- Use Case: System events processing
