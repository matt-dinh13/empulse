---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract REW Service Status"
domain: "Analysis Model"
element_id: 1855816
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RewardPeriod

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract REW Service Status

## 🔗 Connections (2)

- → Dependency: [[EvaluationStatus]]
- ← Dependency: [[REWServiceEvaluationStatus]]

## 📊 Appears In (1 diagrams)

- Logical: Contract REW Service Status

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| startInstallmentNumber | integer |  |
| startInstallmentDueDate | date |  |
| endInstallmentNumber | integer |  |
| endInstallmentDueDate | date |  |
| estimatedAmount | money |  |
| estimatedTariffItemCode | string |  |
| plannedEvaluationDate | date |  |
| evaluationStatus | EvaluationStatus |  |
| chargedAmount | money |  |
| chargedTariffItemCode | string |  |
| evaluationDate | date |  |
| evaluationReason | string |  |
