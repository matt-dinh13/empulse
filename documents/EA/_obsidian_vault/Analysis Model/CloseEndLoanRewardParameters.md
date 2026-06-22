---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications"
domain: "Analysis Model"
element_id: 1855674
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CloseEndLoanRewardParameters

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications

## 📝 Notes

Service request specific parameters. It is filled in for requestsType = CELREW

## 🔗 Connections (2)

- → Dependency: [[RewardEvaluatedPeriodDto]]
- ← Dependency: [[RequestParametersChoice]]

## 📊 Appears In (2 diagrams)

- Logical: Loan Service Request notifications
- Logical: Loan Service Request notifications - CEL Rewards

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| evaluatedPeriod | RewardEvaluatedPeriodDto |  |
