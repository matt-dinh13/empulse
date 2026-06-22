---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1602949
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 CancelOutgoingPaymentRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

It represents one cancelled outgoing payment

## 🔗 Connections (3)

- → Dependency: [[OutgoingPaymentDto (Class 1671300)]]
- → Dependency: [[Processing CancelOugoingPaymentRequest]]
- → Dependency «transformation»: [[ORDERPAY140]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| outgoingPayment | OutgoingPaymentDto |  |
