---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent"
domain: "Modules"
element_id: 1801349
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 BusinessProcess

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent

## 📝 Notes

Element containing attributes of a business process, during which certain contact was established.

## 🔗 Connections (2)

- ← Dependency: [[{ADD}ContactEvent]]
- → Dependency: [[BusinessProcessDetails (Class 1801356)]]

## 📊 Appears In (1 diagrams)

- Logical: ContactEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| businessProcessId | string |  |
| businessProcessType | string |  |
| businessProcessStatusCode | string |  |
| businessProcessDetails | BusinessProcessDetails |  |
