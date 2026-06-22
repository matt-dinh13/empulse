---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Logical Data Model"
domain: "Analysis Model"
element_id: 1761504
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Direct Debit Provider

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Logical Data Model

## 📝 Notes

This entity keeps information about structure of banks from direct debit processing point of view. 

Bank acting as DD Provider is processing direct debits for its DD Client banks. When bank supports direct debits without provider, then bank is recorded as both DD Provider and DD Client (its own).

## 🔗 Connections (1)

- ← Dependency: [[{ADD} GetBankDataResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Bank Management
- Logical: BankManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Due Date Offset | Number |  |
| Archived | boolean |  |
