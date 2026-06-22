---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/RabbitMQ Messages"
domain: "Analysis Model"
element_id: 1729498
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 DomainData 

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/RabbitMQ Messages

## 📝 Notes

Message sent via RabbitMQ containing information about changes salesroom or partner.

## 🔗 Connections (2)

- ← Usage: [[{MOD}Unblock Outgoing Payments]]
- ← Usage: [[Block Outgoing Payments]]

## 📊 Appears In (1 diagrams)

- Logical: RabbitMQ Messages - Domain Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| domain | string |  |
| changedAttributes | string |  |
