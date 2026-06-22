---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications"
domain: "Analysis Model"
element_id: 1855676
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 RewardEvaluatedPeriodDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Loan Service Request notifications

## 📝 Notes

A structure of the evaluated period for reward

## 🔗 Connections (3)

- ← Dependency: [[CloseEndLoanRewardParameters]]
- → Dependency: [[EvaluationPeriodDataDto]]
- → Dependency: [[EvaluationPeriodDataDto]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Request notifications - CEL Rewards

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| estimatedReward | MoneyDto |  |
| evaluationPeriodStart | EvaluationPeriodDataDto |  |
| evaluationPeriodEnd | EvaluationPeriodDataDto |  |
| dpdDelayTolerance | int |  |
