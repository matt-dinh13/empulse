---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS"
domain: "Analysis Model"
element_id: 1855719
diagrams: 2
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯  Divide incoming payment in BSL

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS

## 📝 Notes

User executes this use case to divide unpaired incoming payment into two payments with smaller amounts. Request for division is send from INCPAY module.

## 🔗 Connections (5)

- → Realisation: [[05.070 Divide incoming payment]]
- → Dependency: [[Amount range validation]]
- → Dependency: [[Payment division allowed]]
- → UseCase «include»: [[05.045 Cancel incoming payment (UseCase 1855717)]]
- ← Dependency: [[IncomingPaymentModuleWS (Interface 1855753)]]

## 📊 Appears In (2 diagrams)

- Logical: IncomingPaymentModuleWS
- Use Case: Divide incoming payment
