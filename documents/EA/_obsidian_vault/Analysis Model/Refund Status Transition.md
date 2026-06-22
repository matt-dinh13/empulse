---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/COMMON for Refunds/Logical Data Model"
domain: "Analysis Model"
element_id: 1864790
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Refund Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/COMMON for Refunds/Logical Data Model

## 📝 Notes

It keeps a log of Refund transitions

## 🔗 Connections (2)

- → Usage: [[Refund Status Type]]
- → Aggregation: [[Refund Item]]

## 📊 Appears In (1 diagrams)

- Logical: Refunds domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created By | User |  |
| Creation Date | DateTime |  |
| Status | Refund Status Type |  |
