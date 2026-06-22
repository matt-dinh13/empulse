---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Generated RMQ messages"
domain: "Modules"
element_id: 1880857
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 CreateRefundRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Generated RMQ messages

## 📝 Notes

RabbitMQ message to request creation of refund item in BSL system.

Exchange: payments.refunds.exchange.direct

## 🔗 Connections (7)

- → Dependency: [[{MOD}Create refund item rule]]
- → Dependency: [[05.505 Create refund from incoming payment]]
- → Dependency: [[RefundRecipientTypeDto (Enumeration 1880856)]]
- → Dependency: [[MoneyDto (Class 1880853)]]
- → Dependency: [[MoneyDto (Class 1880853)]]
- → Dependency: [[RefundSrourceSystemDto]]
- → Dependency: [[RefundOperationTypeDto (Enumeration 1880851)]]

## 📊 Appears In (1 diagrams)

- Logical: Create Refund Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}businessUser | string |  |
| amountOfFee | MoneyDto |  |
| amountOfRefund | MoneyDto |  |
| contractCode | string |  |
| messageID | string |  |
| refundDataExchangeID | string |  |
| refundSource | RefundSourceSystemDto |  |
| typeOfOperation | RefundOperationTypeDto |  |
| typeOfRecipient | RefundRecipientTypeDto |  |
