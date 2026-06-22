---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model"
domain: "Analysis Model"
element_id: 1860890
diagrams: 5
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Account Transaction

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model

## 📝 Notes

It keeps object of financial transaction (moves) for revolving loan.
Transaction statuses are set only if transaction object of the Revolving account (CaBus) returns no-error response.

## 🔗 Connections (8)

- ← Association: [[Transaction Change Request (Class 1776360)]]
- → Aggregation: [[Sales Quote Applied]]
- → Dependency: [[Account Transaction Status Type]]
- ← Aggregation: [[Verification (Class 1860893)]]
- → Dependency: [[Transaction Subtype]]
- ← Aggregation: [[Account Transaction Status Transition]]
- → Dependency: [[{MOD}Transaction Type]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (5 diagrams)

- Logical: Account transaction - Logical data model
- Logical: Change in Contract Supplement domain model
- Logical: CSI-1740 - Update TransactionSupplement domain
- Logical: Transaction Supplement authorization method
- Logical: Transaction Supplement domain - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type Variant | string |  |
| Amount Billing | Financial Amount |  |
| Amount Original | Financial Amount |  |
| Conversion Rate | decimal |  |
| Data Exchange Id | string |  |
| Insurance Contract Code | string |  |
| Place Name | string |  |
| Status | Account Transaction Status Type |  |
| Sub Type | Transaction Subtype |  |
| Tariff Item Group Code | string |  |
| Tariff Item Type Code | string |  |
| Transaction Date | Date |  |
| Type | {MOD}Transaction Type |  |
| Commodity External Id | string |  |
| Payment Channel Id | string |  |
| IP Loan Code | string |  |
| {ADD}Purpose | string |  |
