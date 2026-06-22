---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881183
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RevolvingParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

Financial parameters related to REL contract

## 🔗 Connections (2)

- ← Dependency: [[GroupChoice (Class 1881178)]]
- → Generalization «XSDextension»: [[{MOD}ContractParameter (Class 1881173)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditAccountNumber | string |  |
| creditLimit | MoneyDto |  |
| minInstallmentAmount | MoneyDto |  |
| billingDay | int |  |
