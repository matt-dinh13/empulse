---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentsWS"
domain: "Analysis Model"
element_id: 1527586
diagrams: 2
connections: 12
tags:
  - interface
  - analysis-model
---

# 🔶 OutgoingPaymentsWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentsWS

## 📝 Notes

{ADD CBL-445 PAY /}

## 🔗 Connections (12)

- → Dependency: [[GenerateOutgoingPaymentOrderResponse]]
- → Dependency: [[GenerateOutgoingPaymentOrderRequest]]
- → Dependency «invoke»: [[{MOD}05.098 Create outgoing payment on external request]]
- → Dependency: [[{ADD}CreateOutgoingPaymentResponse]]
- → Dependency «invoke»: [[05.102 Browse outgoing payments externally]]
- → Dependency: [[{ADD}CreateOutgoingPaymentRequest]]
- → Dependency «invoke»: [[05.702 Get outgoing payments for contract - service]]
- → Dependency: [[GetOutgoingPaymentsByCriteriaResponse]]
- → Dependency: [[GetOutgoingPaymentsForContractRequest]]
- → Dependency: [[05.112 Generate payment orders on external request]]
- → Dependency: [[GetOutgoingPaymentsByCriteriaRequest]]
- → Dependency: [[GetOutgoingPaymentsForContractResponse]]

## 📊 Appears In (2 diagrams)

- Logical: OutgoingPaymentsWS
- Logical: OutgoingPaymentsWS - generateOutgoingPaymentOrder
