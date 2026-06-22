---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Logical Data Model"
domain: "Analysis Model"
element_id: 1879261
diagrams: 4
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Required Document Container

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Supplement definition/Logical Data Model

## 📝 Notes

A container which aggregates supplement documents asked for a reason

## 🔗 Connections (3)

- ← Association: [[Supplement To Required Document Container (Class 1879274)]]
- ← Aggregation: [[Person Document Type (Class 1879271)]]
- → Usage: [[Request Reason Type (Enumeration 1879266)]]

## 📊 Appears In (4 diagrams)

- Logical: Supplement Definition
- Logical: Supplement definition domain - Logical data model
- Logical: Supplement definition for Collection tool service
- Logical: Supplement definition for Loan restructuring

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Active | boolean |  |
| Code | string |  |
| Name | string |  |
| Reason | Request Reason Type |  |
