---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model"
domain: "Analysis Model"
element_id: 1869713
diagrams: 2
connections: 12
tags:
  - class
  - analysis-model
---

# 🔷 DDM Draft

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model

## 📝 Notes

Object keeping the detailed information about the direct debit mandate drafts (i.e. direct debit mandates entries, which have not passed the validations for the correctness and completeness of their data yet).

## 🔗 Connections (12)

- ← Dependency: [[PAYM_Extended_Property_Value]]
- → Dependency: [[Regular payment type (Class 1822522)]]
- → Dependency: [[Currency (Class 1819822)]]
- → Dependency: [[Account Type]]
- → Dependency: [[DDM Status Type]]
- → Dependency: [[Currency (Class 1819822)]]
- → Dependency: [[PAYM_Extended_Property_Group]]
- → Dependency: [[ECS Provider (Enumeration 1869709)]]
- ← Aggregation: [[{MOD}DDM Document]]
- → Dependency: [[{ADD}DDM Type (Enumeration 1869700)]]
- → Dependency: [[DDM Frequency Type]]
- ← Aggregation: [[DDM JFS Partner]]

## 📊 Appears In (2 diagrams)

- Logical: DDM Draft
- Logical: PAYM Extended Properties

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | boolean |  |
| Code | string |  |
| Bank Account Holder Name | string |  |
| Bank Account Number | string |  |
| Bank Account Type | Account Type |  |
| Bank Branch Sync Code | string |  |
| Contract Code | string |  |
| DDM Type | DDM Type |  |
| ECS Provider | ECS Provider |  |
| External Code | string |  |
| Frequency Type | DDM Frequency Type |  |
| Limit Amount | number |  |
| Limit Currency | Currency |  |
| Regular Payment Amount | number |  |
| Regular Payment Currency | Currency |  |
| Regular Payment Type | Regular payment type |  |
| Status | DDM Status Type |  |
| Valid From | dateTime |  |
| Valid To | dateTime |  |
