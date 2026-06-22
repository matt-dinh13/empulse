---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880120
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ClosedEndParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

Financial parameters related to CEL contract

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[{MOD}ContractParameter]]
- ← Dependency: [[GroupChoice (Class 1880108)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| annuity | MoneyDto |  |
| advPaymentNum | nonNegativeInteger |  |
| annualPercentageRate | decimal |  |
| expectedLoanEndDate | date |  |
| terms | int |  |
| firstDueDate | date |  |
| totalMonthlyPayment | MoneyDto |  |
