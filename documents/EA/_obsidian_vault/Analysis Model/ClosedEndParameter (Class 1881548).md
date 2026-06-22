---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only"
domain: "Analysis Model"
element_id: 1881548
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ClosedEndParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only

## 📝 Notes

Financial parameters related to CEL contract

## 🔗 Connections (2)

- ← Dependency: [[GroupChoice (Class 1881554)]]
- → Generalization «XSDextension»: [[{MOD}ContractParameter (Class 1881547)]]

## 📊 Appears In (1 diagrams)

- Logical: v8 - IN only

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
