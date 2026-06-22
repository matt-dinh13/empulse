---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1602950
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 PaymentOrderRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

It represents one or more paid outgoing payments (payments allocated to the payment order )

## 🔗 Connections (3)

- → Association: [[OutgoingPaymentDto (Class 1671300)]]
- → Dependency: [[Processing PaymentOrderRequest]]
- → Dependency «transformation»: [[ORDERPAY140]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentOrderDataExchangeId | string |  |
| outgoingPayments | OutgoingPaymentDto |  |
