---
type: Class
stereotype: "json"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Contract Requests/v1/PayOffRequest"
domain: "Analysis Model"
element_id: 1835375
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}PayOffRequest

> **Type**: Class · **Stereotype**: «json»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Contract Requests/v1/PayOffRequest

## 📝 Notes

{ADD CLM-5124/}

LDM: input Loxon request

## 🔗 Connections (2)

- → Dependency: [[PayoffReasonCodeDto (Enumeration 1819477)]]
- → Dependency: [[reasonCode (Enumeration 1835374)]]

## 📊 Appears In (1 diagrams)

- Logical: PayOffRequest

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| reasonCode | string |  |
| payoffDate | string |  |
