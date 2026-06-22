---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentsWS"
domain: "Analysis Model"
element_id: 1527594
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CreateOutgoingPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentsWS

## 📝 Notes

{ADD PAYM-580 /}

request for creating an outgoing payment for a specified contract, payment type and amount

## 🔗 Connections (3)

- ← Dependency: [[OutgoingPaymentsWS (Interface 1527586)]]
- → Dependency: [[CreateOutgoingPaymentAttributeDto]]
- → Dependency: [[OutgoingPaymentTypeDto]]

## 📊 Appears In (1 diagrams)

- Logical: OutgoingPaymentsWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| paymentType | OutgoingPaymentTypeDto |  |
| amount | PositiveMoneyDto |  |
| paymentChannelId | int |  |
| attributes | CreateOutgoingPaymentAttributeDto |  |
