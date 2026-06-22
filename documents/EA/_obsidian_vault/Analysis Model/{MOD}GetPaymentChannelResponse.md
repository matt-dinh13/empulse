---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3"
domain: "Analysis Model"
element_id: 1521818
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}GetPaymentChannelResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS/PaymentChannelWSV3

## 📝 Notes

{ADD}PAYM-2722{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[PaymentChannelWSV3 (Interface 1521804)]]
- → Dependency: [[PaymentChannelResponseResult]]
- → Dependency: [[{MOD}PaymentChannelDto]]

## 📊 Appears In (1 diagrams)

- Logical: PaymentChannelWSV3 - Get Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentChannel | PaymentChannelDto |  |
| {DEL}bankAccount | BankAccountDto |  |
| result | CreatePaymentChannelResponseStatusDto |  |
