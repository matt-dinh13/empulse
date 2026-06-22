---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest"
domain: "Analysis Model"
element_id: 1879813
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 CELAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest

## 📝 Notes

It represent common attributes for account transactions.

## 🔗 Connections (4)

- ← Generalization «XSDextension»: [[CELFeeAccountTransaction (Class 1879817)]]
- ← Generalization «XSDextension»: [[CELInsuranceAccountTransaction (Class 1879814)]]
- ← Generalization «XSDextension»: [[CELPrincipalAccountTransaction (Class 1879818)]]
- ← Generalization «XSDextension»: [[CELSubsidyAccountTransaction]]

## 📊 Appears In (1 diagrams)

- Logical: CELAccountTransactionsRequest

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amount | MoneyDto |  |
