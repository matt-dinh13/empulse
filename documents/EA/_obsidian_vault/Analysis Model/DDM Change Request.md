---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model"
domain: "Analysis Model"
element_id: 1869704
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 DDM Change Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model

## 📝 Notes

This entity is uses for saving information from use cases Update DDM and Receive DDM form client. After then, information about DDM needed changes are saved, a job operation will work with them.

## 🔗 Connections (3)

- → Dependency: [[DDM Change Status Type]]
- → Dependency: [[Payment Channel Type]]
- → Aggregation: [[DDM (Class 1869699)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract - DDM
- Logical: Contract Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Executed Date | Date |  |
| Planed Date | Date |  |
| Requested Payment Channel | Payment Channel Type |  |
| Status | DDM Change Status Type |  |
