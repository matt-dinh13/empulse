---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3"
domain: "Analysis Model"
element_id: 1521804
diagrams: 7
connections: 22
tags:
  - interface
  - analysis-model
---

# 🔶 PaymentChannelWSV3

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3

## 📝 Notes

{ADD CBL-1140 PAY /}

## 🔗 Connections (22)

- ← Dependency: [[{ADD}GetPaymentChannelRequest]]
- → Dependency: [[{MOD}05.320 Create payment channel on external request]]
- → Dependency: [[GetPaymentChannelByBankAccountDataRequest]]
- → Dependency: [[PaymentChannelFault]]
- → Dependency: [[14.661 Change repayment channel via WS (UseCase 1862015)]]
- → Dependency: [[{MOD}05.321 Update payment channel on external request]]
- → Dependency: [[ChangeRepaymentChannelRequest (Class 1502810)]]
- → Dependency: [[{ADD}05.323 Get payment channel by bank account data on external request (UseCase 1727111)]]
- → Dependency: [[{ADD}UpdatePaymentChannelResponse]]
- → Dependency: [[ChangeRepaymentChannelResponse (Class 1502818)]]
- → Dependency: [[{ADD}CreatePaymentChannelResponse]]
- → Dependency: [[validatePaymentChannelFault]]
- → Dependency: [[ChangeRepaymentChannelFault (Class 1502814)]]
- → Dependency: [[validatePaymentChannelRequest]]
- → Dependency: [[validatePaymentChannelResponse]]
- → Dependency: [[GetPaymentChannelByBankAccountDataResponse]]
- → Dependency: [[{MOD}GetPaymentChannelResponse]]
- → Dependency: [[{ADD}05.324 Validate Payment Channel (UseCase 1727117)]]
- → Dependency: [[UpdatePaymentChannelRequest]]
- → Dependency: [[CreatePaymentChannelRequest]]
- → Dependency: [[ValidatePaymentChannelError]]
- ← Dependency: [[05.322 Get payment channel on external request]]

## 📊 Appears In (7 diagrams)

- Logical: PaymentChannelWSV3
- Logical: PaymentChannelWSV3 - Change Repayment Channel
- Logical: PaymentChannelWSV3 - Create Payment Channel
- Logical: PaymentChannelWSV3 - Get Payment Channel
- Logical: PaymentChannelWSV3 - Get Payment Channel By Bank Account
- Logical: PaymentChannelWSV3 - Update Payment Channel
- Logical: PaymentChannelWSV3 - Validate Payment Channel
