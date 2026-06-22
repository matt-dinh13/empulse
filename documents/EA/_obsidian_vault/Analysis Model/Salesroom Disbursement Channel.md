---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Logical Data Model"
domain: "Analysis Model"
element_id: 1556390
diagrams: 2
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Salesroom Disbursement Channel

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Logical Data Model

## 📝 Notes

This entity defines available combinations of product types and payment channels for disbursement for salesroom.

## 🔗 Connections (8)

- ← Dependency: [[Available disbursement channel]]
- ← Dependency: [[Available disbursement channel]]
- ← Dependency: [[Available disbursement channel]]
- → Dependency: [[Product Transaction Type]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- ← Aggregation: [[Salesroom Disbursement Channel 2 Payment Provider]]
- → Dependency: [[Payment Channel Type]]
- → Association: [[Salesroom (Class 1556394)]]

## 📊 Appears In (2 diagrams)

- Logical: Salesroom
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | boolean |  |
| Disbursement channel | Payment Channel Type |  |
| Product Type | Product Type |  |
| Transaction Type | Product Transaction Type |  |
