---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/RabbitMQ messages"
domain: "Analysis Model"
element_id: 1687130
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ExtendedProperty

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/RabbitMQ messages

## 📝 Notes

{ADD CBL-16385 PAYM-4592}
LDM of attributes
- key  = Contract->OutgoingPayment -> Paym_ext_property_value.Value
- value = Contract->OutgoingPayment -> Paym_ext_property_group.Code = OUTGOING_PAYMENT

## 🔗 Connections (2)

- → Dependency: [[{ADD}KeyValueType (Class 1687131)]]
- ← Dependency: [[OutgoingPaymentNotification]]

## 📊 Appears In (1 diagrams)

- Logical: RabbitMQ messages - OutgoingPaymentNotification
