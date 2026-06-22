---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Direct debit (DD)/Use Case Model"
domain: "Modules"
element_id: 1860968
diagrams: 1
connections: 1
tags:
  - usecase
  - modules
---

# 🎯 Send Kafka Message

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Direct debit (DD)/Use Case Model

## 📝 Notes

DDM module is notified about any change on DDM from BSL via RMQ DDM Info. Based on this notification all received data are streamed to Kafka.

## 🔗 Connections (1)

- ← Association: [[BSL (Actor 1880871)]]

## 📊 Appears In (1 diagrams)

- Use Case: Send Kafka Message
