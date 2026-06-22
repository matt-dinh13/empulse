---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model"
domain: "Analysis Model"
element_id: 1534441
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Personal Document Container

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model

## 📝 Notes

Container of person's documents that are to collect

## 🔗 Connections (5)

- → Dependency: [[Document Container Status]]
- → Dependency: [[Container Type]]
- → Aggregation: [[Subprocess (Class 1534443)]]
- ← Aggregation: [[Document Type To Container]]
- → Dependency: [[Person Scoring Segment]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Origination Configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Status | Document Container Status |  |
| Minimal Count Of Documents | integer |  |
| Type | Container Type |  |
| Person Scoring Segment | Person Scoring Segment |  |
