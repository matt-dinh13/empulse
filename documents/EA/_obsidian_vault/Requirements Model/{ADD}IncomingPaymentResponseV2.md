---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5190 BRVN-154 Overpayment process for REL"
domain: "Requirements Model"
element_id: 1880855
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {ADD}IncomingPaymentResponseV2

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5190 BRVN-154 Overpayment process for REL

## 📝 Notes

{ADD PAYM-5190/}
For country: VN

RabbitMQ message about incoming payment pairing status.

Exchange: rabbitmq.payments.inp.out.response.routingKeyV2=payments.notifications.IncomingPaymentResponse.v2

## 🔗 Connections (1)

- → Dependency: [[IncomingPaymentResultTypeDto (Enumeration 1212857)]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-5190 BRVN-154 Overpayment process for REL
- Logical: IncomingPaymentResponseV2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| messageId | string |  |
| resultCode | IncomingPaymentResultTypeDto |  |
| sourceSystem | string |  |
| operationType | string |  |
| dataExchangeId | string |  |
