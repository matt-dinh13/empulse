---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model"
domain: "Analysis Model"
element_id: 1255721
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 CEL Reward Evaluated Period

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model

## 📝 Notes

This entity holds all the data needed for evaluation of CEL Rewards service:
  - needed for calculation of rewards and communication to Loxon (LCS).

## 🔗 Connections (6)

- → Dependency: [[Reward Data]]
- → Dependency: [[Evaluated Period Data]]
- → Dependency: [[Evaluated Period Data]]
- → Aggregation: [[CEL Reward Request]]
- ← Association: [[{ADD}CELRewardMissedSE]]
- ← Association: [[{ADD}CELRewardSuccessSE]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Rewards request
- Logical: Others

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Evaluated Period Start | Evaluated Period Data |  |
| Evaluated Period End | Evaluated Period Data |  |
| Charged Reward | Reward Data |  |
| Evaluation Reason | string |  |
| Estimated Reward | Reward Data |  |
| Evaluation Date Planned | DateTime |  |
| Evaluation Date | DateTime |  |
| ActiveYN | boolean |  |
