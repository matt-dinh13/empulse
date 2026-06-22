---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest"
domain: "Analysis Model"
element_id: 1879818
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CELPrincipalAccountTransaction

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest

## 📝 Notes

It represents one account transaction on a principal.

LDM source for CELAccountTransaction (it is XMLextension):

	
- amount = FinancialParameters[where Archived = false].NetCreditAmount

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[CELAccountTransaction (Class 1879813)]]
- ← Dependency: [[{ADD}CELAccountTransactionsDto]]

## 📊 Appears In (1 diagrams)

- Logical: CELAccountTransactionsRequest

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| refinancedAmount | MoneyDto |  |
| refinancedExtAmount | MoneyDto |  |
