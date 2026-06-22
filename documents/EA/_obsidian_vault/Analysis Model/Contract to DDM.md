---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879572
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Contract to DDM

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Object keeping the relations between the contract and instances of related direct debit mandates (managed by external system).

Note: Specifies which direct debit mandate should be used for debt repayment by client. It can change during a contract lifecycle.

## 🔗 Connections (1)

- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract
- Logical: Contract Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DDM ID | string |  |
| Archived | boolean |  |
