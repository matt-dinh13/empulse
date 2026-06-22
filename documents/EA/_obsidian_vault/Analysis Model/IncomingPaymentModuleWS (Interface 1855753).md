---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS"
domain: "Analysis Model"
element_id: 1855753
diagrams: 1
connections: 16
tags:
  - interface
  - analysis-model
---

# 🔶 IncomingPaymentModuleWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/IncomingPaymentModuleWS

## 📝 Notes

{ADD MODULARIZATION}
STRICTLY  desired  to  be  used  by  INC_PAY  application  ONLY
namespace="http://homecredit.net/homerselect/ws/common/v1"

## 🔗 Connections (16)

- → Dependency: [[CreateDecoupledPaymentResponse]]
- → Dependency: [[CreateIncomingPaymentRequest (Class 1848196)]]
- → Dependency: [[DivideIncomingPaymentRequest]]
- → Dependency: [[ValidateForDecoupleResponse]]
- → Dependency: [[CreateDecoupledPaymentRequest]]
- → Dependency: [[CoupleIncomingPaymentRequest]]
- → Dependency: [[ComputeAmountToPairingRequest (Class 1848198)]]
- → Dependency: [[DivideIncomingPaymentResponse]]
- → Dependency: [[ComputeAmountToPairingResponse (Class 1848197)]]
- → Dependency: [[CreateIncomingPaymentResponse (Class 1848195)]]
- → Dependency: [[CancelIncomingPaymentRequest (Class 1848209)]]
- → Dependency: [[CancelIncomingPaymentResponse (Class 1848207)]]
- → Dependency: [[ValidateForDecoupleRequest]]
- → Dependency: [[CoupleIncomingPaymentResponse]]
- → Dependency: [[Process cancel incoming payment request]]
- → Dependency: [[Divide incoming payment in BSL]]

## 📊 Appears In (1 diagrams)

- Logical: IncomingPaymentModuleWS
