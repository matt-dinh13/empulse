---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model"
domain: "Analysis Model"
element_id: 1595593
diagrams: 2
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Partner Disbursement Channel

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Logical Data Model

## 📝 Notes

This entity defines available combinations of product types and payment channels for disbursement for partner.

## 🔗 Connections (8)

- ← Dependency: [[Available disbursement channel]]
- ← Dependency: [[Available disbursement channel]]
- ← Dependency: [[Available disbursement channel]]
- ← Dependency: [[Available disbursement channel]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- ← Aggregation: [[Partner Disbursement Channel 2 Payment Provider]]
- → Dependency: [[Payment Channel Type]]
- → Association: [[{MOD}Partner]]

## 📊 Appears In (2 diagrams)

- Logical: Partner
- Logical: SNM Partner Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Transaction Type | Product Transaction Type |  |
| Archived | boolean |  |
| Disbursement channel | Payment Channel Type |  |
| Product Type | Product Type |  |
