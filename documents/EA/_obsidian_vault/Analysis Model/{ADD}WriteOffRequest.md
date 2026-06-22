---
type: Class
stereotype: "json"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Contract Requests/v1/WriteOffRequest"
domain: "Analysis Model"
element_id: 1699680
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}WriteOffRequest

> **Type**: Class · **Stereotype**: «json»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Contract Requests/v1/WriteOffRequest

## 📝 Notes

{ADD CLM-4832/}

LDM: input Loxon request

## 🔗 Connections (2)

- → Dependency: [[PayoffReasonCodeDto (Enumeration 1819477)]]
- → Dependency: [[reasonCode]]

## 📊 Appears In (1 diagrams)

- Logical: WriteOffRequest

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| reasonCode | string |  |
| writeoffDate | string |  |
