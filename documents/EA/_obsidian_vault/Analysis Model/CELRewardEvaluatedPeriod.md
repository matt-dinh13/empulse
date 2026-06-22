---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests"
domain: "Analysis Model"
element_id: 1850939
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CELRewardEvaluatedPeriod

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Service Requests

## 🔗 Connections (3)

- → Dependency: [[Evaluated Period Data (Class 1850945)]]
- ← Dependency: [[CELRewardRequest]]
- → Dependency: [[Evaluated Period Data (Class 1850945)]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| evaluatedPeriodStart | Evaluated Period Data |  |
| evaluatedPeriodEnd | Evaluated Period Data |  |
| estimatedReward | Reward Data |  |
| evaluationDatePlanned | Date |  |
| evaluationDate | DateTime |  |
| chargedReward | Reward Data |  |
| evaluationReason | string |  |
