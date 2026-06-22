---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS"
domain: "Analysis Model"
element_id: 1502819
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}GetPaymentChannelResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentChannelWS

## 📝 Notes

{ADD PAYM-580 /}

## 🔗 Connections (5)

- ← Dependency: [[PaymentChannelWS (Interface 1502835)]]
- → Dependency: [[PaymentChannelResponseResult]]
- → Dependency: [[{ADD}PaymentChannelDto]]
- → Dependency: [[BankAccountDto (DataType 1587864)]]
- ← Dependency: [[PaymentChannelWSV2 (Interface 1502829)]]

## 📊 Appears In (2 diagrams)

- Logical: PaymentChannelWS
- Logical: PaymentChannelWSV2 - Get Payment Channel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentChannel | PaymentChannelDto |  |
| bankAccount | BankAccountDto |  |
| result | CreatePaymentChannelResponseStatusDto |  |
