---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1502835
diagrams: 2
connections: 10
tags:
  - interface
  - analysis-model
---

# 🔶 PaymentChannelWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (10)

- → Dependency: [[{ADD}GetPaymentChannelResponse]]
- → Dependency: [[{ADD}UpdatePaymentChannelResponse]]
- → Dependency: [[PaymentChannelFault]]
- → Dependency: [[{ADD}GetPaymentChannelRequest]]
- → Dependency «invokes»: [[{MOD}05.321 Update payment channel on external request]]
- → Dependency: [[ChangeRepaymentChannelRequest (Class 1502810)]]
- → Dependency: [[{ADD}05.323 Get payment channel by bank account data on external request (UseCase 1727111)]]
- → Dependency: [[GetPaymentChannelByBankAccountDataResponse]]
- → Dependency: [[GetPaymentChannelByBankAccountDataRequest]]
- → Dependency: [[{ADD}UpdatePaymentChannelRequest]]

## 📊 Appears In (2 diagrams)

- Logical: PaymentChannelWS
- Logical: PaymentChannelWS - get payment channels by bank account data
