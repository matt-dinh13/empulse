---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model"
domain: "Analysis Model"
element_id: 1868576
diagrams: 8
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Loan Service Request Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model

## 📝 Notes

Logging Service Request lifecycle (statuses transitions)

## 🔗 Connections (2)

- → Aggregation: [[Loan Service Request (Class 1868549)]]
- → Dependency: [[Loan Service Request Status Type (Enumeration 1868544)]]

## 📊 Appears In (8 diagrams)

- Logical: CEL Rewards request
- Logical: Change due date request
- Logical: Checking Terms of Loan Service Request
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: LSR.Insurance Offer - Logical Data Model
- Logical: Payment holiday request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Creation Date | DateTime |  |
| Performed By | User |  |
| Reason | string |  |
| Status | Loan Service Request Status Type |  |
