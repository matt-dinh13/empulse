---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment to pay/v1"
domain: "Analysis Model"
element_id: 1812634
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Installment to pay

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Installment Schedule/Installment to pay/v1

## 📝 Notes

ADD {IS-2213}

rabbitmq exchange:
bsl.installments.headers.installment.exchange

header key - operationType
header value - nextInstallment

## 🔗 Connections (1)

- ← Dependency: [[Calculate Installment to pay]]

## 📊 Appears In (1 diagrams)

- Logical: Installment to Pay v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| amount | number |  |
| dueDate | date |  |
| customerDueDate | date |  |
