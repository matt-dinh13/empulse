---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages"
domain: "Modules"
element_id: 1750200
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 ClosedEndParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages

## 📝 Notes

A financial parameters related to CEL contract

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[ContractParameter]]
- ← Dependency: [[GroupChoice]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Contract full info notification - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| advPaymentNum | positiveInteger |  |
| annualPercentageRate | decimal |  |
| annuity | MoneyDto |  |
| expectedLoanEndDate | date |  |
| firstDueDate | date |  |
| terms | int |  |
| totalMonthlyPayment | MoneyDto |  |
