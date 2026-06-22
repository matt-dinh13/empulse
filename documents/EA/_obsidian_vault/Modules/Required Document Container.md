---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model"
domain: "Modules"
element_id: 1874540
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Required Document Container

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model

## 📝 Notes

A container which aggregates supplement documents asked for a reason

## 🔗 Connections (3)

- → Usage: [[Request Reason Type]]
- ← Association: [[Supplement To Required Document Container]]
- ← Aggregation: [[Person Document Type]]

## 📊 Appears In (1 diagrams)

- Logical: Supplement definition - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Active | boolean |  |
| Code | string |  |
| Name | string |  |
| Reason | Request Reason Type |  |
