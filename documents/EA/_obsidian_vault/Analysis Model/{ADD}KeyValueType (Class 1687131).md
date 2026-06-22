---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/RabbitMQ messages"
domain: "Analysis Model"
element_id: 1687131
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}KeyValueType

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/RabbitMQ messages

## 📝 Notes

{ADD CBL-16385 PAYM-4592}
LDM of attributes
Paym_ext_property_group = OUTGOING_PAYMENT
Paym_ext_property_item =  values of Paym_ext_property_group
Paym_ext_property_value = values of Paym_ext_property_item


Commond Extended Property:
dataExchangeID (LDM: OutogingPayment -> PaymentChannel.DataExchangeID) 
PaymentOrderID (LDM: OutgoingPayment -> OutgoingPaymentOrder.External_ID)

## 🔗 Connections (1)

- ← Dependency: [[{ADD}ExtendedProperty (Class 1687130)]]

## 📊 Appears In (1 diagrams)

- Logical: RabbitMQ messages - OutgoingPaymentNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| key | string |  |
| value | string |  |
