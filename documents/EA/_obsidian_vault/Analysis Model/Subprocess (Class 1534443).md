---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model"
domain: "Analysis Model"
element_id: 1534443
diagrams: 2
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 Subprocess

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model

## 📝 Notes

Subprocess defined within the loan origination processes

## 🔗 Connections (11)

- ← Aggregation: [[Field Validation]]
- ← Aggregation: [[Document Processing Configuration]]
- ← Aggregation: [[{DEL}Cross Validation]]
- ← Aggregation: [[Cross Validation]]
- ← Aggregation: [[Subprocess Parameter]]
- → Dependency: [[Process Status]]
- ← Aggregation: [[{DEL}Field Validation]]
- → Aggregation: [[Loan Origination Process]]
- → Dependency: [[Subprocess Type]]
- ← Aggregation: [[Personal Document Container (Class 1534441)]]
- ← Aggregation: [[Form Configuration]]

## 📊 Appears In (2 diagrams)

- Logical: Form Validations
- Logical: Loan Origination Configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Subprocess Type | Subprocess Type |  |
| Version | int |  |
| Status | Process Status |  |
