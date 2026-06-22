---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1746973
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Outgoing Payment Status Transition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

Change log of outgoing payment statuses. Also the first setting of status (during payment creation) is logged.

{ADD CBL-3001 PAYM-1012}
If first status transition with status - UNPAID is created, the system sets Outgoing Payment.Ready For Disbursement Date = current date and time.
{ADD/}

## 🔗 Connections (2)

- → Aggregation: [[Outgoing Payment]]
- → Dependency: [[Outgoing Payment Status]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Status | Outgoing Payment Status |  |
| Created By | User |  |
| Created When | Date Time |  |
