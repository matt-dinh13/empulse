---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1502816
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 GetPaymentChannelByBankAccountDataRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 📝 Notes

{ADD CBL-3607 PAYM-1617 /}

## 🔗 Connections (4)

- ← Dependency: [[PaymentChannelWS (Interface 1502835)]]
- → Dependency: [[PaymnetChannelBankAccountDataFilterDto]]
- ← Dependency: [[PaymentChannelWSV2 (Interface 1502829)]]
- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]

## 📊 Appears In (3 diagrams)

- Logical: PaymentChannelWS - get payment channels by bank account data
- Logical: PaymentChannelWSV2 - Get Payment Channel By Bank Account
- Logical: PaymentChannelWSV3 - Get Payment Channel By Bank Account

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountFilter | PaymnetChannelBankAccountDataFilterDto |  |
