---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights"
domain: "Analysis Model"
element_id: 1727111
diagrams: 5
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.323 Get payment channel by bank account data on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels via WS/Access Rights

## 📝 Notes

{ADD PAYM-1428 CBL-3607 /}

This technical use case is triggered by calling PaymentChannelWs.getPaymentChannelByBankAccountData(). It returns data of a payment channel fetched by the provided payment channel id and a bank account associated with it.

## 🔗 Connections (6)

- ← Dependency: [[PaymentChannelWS (Interface 1502835)]]
- ← Dependency: [[PaymentChannelWSV2 (Interface 1502829)]]
- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]
- → Dependency: [[{ADD}05.323 Get payment channel by bank account data on external request]]
- ← Association «Provider»: [[Contract Management (Actor 1880867)]]
- ← UseCase: [[Loan Origination (Actor 1880864)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Logical: PaymentChannelWS - get payment channels by bank account data
- Logical: PaymentChannelWSV2 - Get Payment Channel By Bank Account
- Logical: PaymentChannelWSV3 - Get Payment Channel By Bank Account
- Use Case: Payment Channels via WS
