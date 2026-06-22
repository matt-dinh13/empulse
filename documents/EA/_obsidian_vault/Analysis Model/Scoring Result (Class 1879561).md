---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879561
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Scoring Result

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Contains information received from evaluation that are necessary for HS (it means not all that are returned]

## 🔗 Connections (3)

- → Dependency: [[Evaluation Result Type]]
- → Dependency «use»: [[KeyAndValue Type]]
- → Aggregation: [[Scoring (Class 1879590)]]

## 📊 Appears In (1 diagrams)

- Logical: Scoring

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Creation Date | DateTime |  |
| Evaluation Result Reason | text |  |
| Evaluation Result | Evaluation Result Type |  |
| Undesirable Period | Number |  |
| Additional Information | KeyAndValue Type |  |
| AF Template | String |  |
