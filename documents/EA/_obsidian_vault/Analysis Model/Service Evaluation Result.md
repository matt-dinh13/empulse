---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Logical Data Model"
domain: "Analysis Model"
element_id: 1073556
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Service Evaluation Result

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools requests/Logical Data Model

## 📝 Notes

This entity holds evaluation data of a collection tool service related to the contract. The entity is not persisted in the system database.

## 🔗 Connections (4)

- → Dependency: [[Service Evaluation Status]]
- ← Aggregation: [[Service Evaluation Result Detail]]
- → Dependency: [[Service Evaluation Status]]
- → Aggregation: [[Available Collection Tool Service]]

## 📊 Appears In (1 diagrams)

- Logical: Collection tools evaluation domains

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Evaluation Status | Service Evaluation Status |  |
| Last Service Activation | date |  |
| Overrule Evaluation Status | Service Evaluation Status |  |
| Service | Contract Service |  |
