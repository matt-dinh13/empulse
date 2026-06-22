---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process"
domain: "Requirements Model"
element_id: 1776366
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Account Transaction Supplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process

## 📝 Notes

Contract Supplement extension for ALOP/APOS/CASH/POS Transaction Supplement

## 🔗 Connections (3)

- → Usage: [[Request Source Id]]
- ← Aggregation: [[Transaction Change Request (Class 1776360)]]
- ← Aggregation: [[Sales Quote Applied]]

## 📊 Appears In (4 diagrams)

- Logical: Change in Contract Supplement domain model
- Logical: CSI-1740 - Update TransactionSupplement domain
- Logical: Transaction Supplement authorization method
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Chosen Offer Id | string |  |
| Request Source | Request Source Id |  |
| Transaction Type | string |  |
| Marketing Offer Id | string |  |
| Application Code | string |  |
| Loan Type | string |  |
| Disbursement Payment Channel Id | string |  |
