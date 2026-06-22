---
type: Decision
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions"
domain: "Requirements Model"
element_id: 1519226
diagrams: 1
connections: 3
tags:
  - decision
  - requirements-model
---

# 🔀 Next Incoming Payment exists?

> **Type**: Decision
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-620 (CBL-7897) Prevent exceeding maximum number of installment versions

## 🔗 Connections (3)

- ← ControlFlow: [[Next Instalment Part exists_]]
- → ControlFlow: [[For each incoming payment]]
- → ControlFlow: [[Generate IncomingPaymentPairingChangedCELSE system event]]

## 📊 Appears In (1 diagrams)

- Activity: AD - 05.200 Perform decoupling
