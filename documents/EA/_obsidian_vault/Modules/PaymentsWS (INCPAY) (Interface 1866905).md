---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentsWS (INCPAY)"
domain: "Modules"
element_id: 1866905
diagrams: 1
connections: 7
tags:
  - interface
  - modules
---

# 🔶 PaymentsWS (INCPAY)

> **Type**: Interface
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided WS/PaymentsWS (INCPAY)

## 📝 Notes

Web service used for automatic import of payments from an external system into BSL and for creating and canceling payments online by external applications.
INCPAY VERSION

## 🔗 Connections (7)

- → Dependency: [[CancelPaymentResponse]]
- → Dependency: [[05.012 Automatic import incoming payments via WS]]
- → Abstraction «trace»: [[05.361 Create incoming payment on external request (UseCase 1855364)]]
- → Dependency: [[05.360 Cancel incoming payment on external request (UseCase 1855367)]]
- → Dependency: [[CancelPaymentRequest]]
- → Dependency: [[CreatePaymentRequest (Class 1866910)]]
- → Dependency: [[CreatePaymentResponse (Class 1866904)]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentsWS (for external systems)
