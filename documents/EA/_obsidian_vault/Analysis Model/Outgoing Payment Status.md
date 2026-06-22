---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model"
domain: "Analysis Model"
element_id: 1746972
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Outgoing Payment Status

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/COMMON for Outgoing Payments/Logical Data Model

## 📝 Notes

Status of outgoing payment (e.g. paid/unpaid)

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Outgoing Payment Status Transition]]
- ← Dependency: [[Outgoing Payment]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing Payment Orders
- Logical: Outgoing Payments

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| C (Cancelled) |  |  |
| G (Order generating) |  |  |
| P (Paid) |  |  |
| U (Unpaid) |  |  |
| D (Delivered) |  |  |
| N (Not delivered) |  |  |
| R (Ready for redisbursement) |  |  |
| W (Waiting) |  |  |
