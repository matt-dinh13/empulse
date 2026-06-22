---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880109
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RevolvingParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

Financial parameters related to REL contract

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[{MOD}ContractParameter]]
- ← Dependency: [[GroupChoice (Class 1880108)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditAccountNumber | string |  |
| creditLimit | MoneyDto |  |
| minInstallmentAmount | MoneyDto |  |
| billingDay | int |  |
