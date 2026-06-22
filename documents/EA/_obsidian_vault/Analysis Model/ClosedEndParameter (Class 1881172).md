---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881172
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ClosedEndParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

Financial parameters related to CEL contract

## 🔗 Connections (2)

- ← Dependency: [[GroupChoice (Class 1881178)]]
- → Generalization «XSDextension»: [[{MOD}ContractParameter (Class 1881173)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

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
