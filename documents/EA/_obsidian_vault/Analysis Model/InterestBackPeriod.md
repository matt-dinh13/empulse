---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract IBACK Service status"
domain: "Analysis Model"
element_id: 1869833
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InterestBackPeriod

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract IBACK Service status

## 📝 Notes

{ADD IS-2617} {PH only}

## 🔗 Connections (2)

- → Dependency: [[EvaluationStatus (Enumeration 1869832)]]
- ← Dependency: [[InterestBackStatus (Class 1869831)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract IBACK Service status

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| relatedInstallmentNumber | integer |  |
| relatedInstallmentDueDate | date |  |
| evaluationStatus | EvaluationStatus |  |
| interestBackAmount | money |  |
| evaluationDate | date |  |
| periodDueDate | date |  |
| discountedAnuity | money |  |
