---
type: Class
stereotype: "XSDchoice"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881178
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GroupChoice

> **Type**: Class · **Stereotype**: «XSDchoice»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

A choice of the contract parameter types by product types (CEL/REL)

## 🔗 Connections (3)

- → Dependency: [[RevolvingParameter (Class 1881183)]]
- → Dependency: [[ClosedEndParameter (Class 1881172)]]
- ← Association: [[ContractFullInfo (Class 1881167)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractParameterCEL | ClosedEndParameter |  |
| contractParameterREL | RevolvingParameter |  |
