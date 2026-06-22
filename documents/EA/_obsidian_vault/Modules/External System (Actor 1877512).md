---
type: Actor
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process external request on incoming payment/Use Case Model"
domain: "Modules"
element_id: 1877512
diagrams: 6
connections: 6
tags:
  - actor
  - modules
---

# 👤 External System

> **Type**: Actor
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process external request on incoming payment/Use Case Model

## 📝 Notes

External System, communication under public standards.

## 🔗 Connections (6)

- → UseCase: [[Create refund for incoming payment via API]]
- → Association: [[05.362 Recouple misposted payment on external request]]
- → UseCase: [[05.360 Cancel incoming payment on external request (UseCase 1855367)]]
- → Association: [[getActivePayments]]
- → UseCase: [[05.361 Create incoming payment on external request (UseCase 1855364)]]
- → Association: [[{ADD}searchPayments]]

## 📊 Appears In (6 diagrams)

- Use Case: Cancellation incoming payment on external request
- Use Case: Creation incoming payment on external request
- Use Case: Incoming Payments - Actors
- Use Case: Recouple misposted payment on external request
- Use Case: Refund processing
- Use Case: Use Case Model
