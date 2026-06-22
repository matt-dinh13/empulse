---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880108
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GroupChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

A choice of the contract parameter types by product types (CEL/REL)

## 🔗 Connections (3)

- → Dependency: [[RevolvingParameter (Class 1880109)]]
- → Dependency: [[ClosedEndParameter (Class 1880120)]]
- ← Association: [[ContractFullInfo]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractParameterCEL | ClosedEndParameter |  |
| contractParameterREL | RevolvingParameter |  |
