---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process"
domain: "Requirements Model"
element_id: 1776360
diagrams: 4
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 Transaction Change Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process

## 📝 Notes

An entity for storage of change requests for the processed Transaction Supplements

## 🔗 Connections (2)

- → Aggregation: [[Account Transaction Supplement]]
- → Association: [[Account Transaction]]

## 📊 Appears In (4 diagrams)

- Logical: Change in Contract Supplement domain model
- Logical: CSI-1740 - Update TransactionSupplement domain
- Logical: Transaction Supplement authorization method
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Reason Code | string |  |
| Refunded Amount | MoneyType |  |
| Customer Cancellation Date | date |  |
| Partner Change Request Id | string |  |
| Processing Status | string |  |
| Reason Description | string |  |
