---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Total Monthly Installment Info"
domain: "Analysis Model"
element_id: 1371967
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 MonthlyInstallment

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Total Monthly Installment Info

## 📝 Notes

JMS notification triggered by multiple system events (generally on change of contract monthly installment amount, e.g. processed PER, processed LRES) and sent to 360 application via OSB. The notification is used to calculate AMMIL (available maximal monthly installment limit) that is being used by LAP and CaBus for contract/transaction approval.

## 🔗 Connections (1)

- → Dependency: [[TotalMonthlyInstallmentInfoSenderSystem]]

## 📊 Appears In (1 diagrams)

- Logical: Monthly Installment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| cuid | string |  |
| senderSystem | TotalMonthlyInstallmentInfoSenderSystem |  |
| timestamp | long |  |
| totalMonthlyInstallmentAmount | string |  |
