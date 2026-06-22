---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model"
domain: "Analysis Model"
element_id: 1534450
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Loan Origination Process

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Loan origination configuration /Logical Data Model

## 📝 Notes

Loan origination process

## 🔗 Connections (4)

- → Dependency: [[Process Status]]
- ← Aggregation: [[Subprocess (Class 1534443)]]
- ← Dependency: [[{MOD}Product]]
- ← Dependency: [[Service (Class 1880804)]]

## 📊 Appears In (3 diagrams)

- Logical: Loan Origination Configuration
- Logical: Loan Service Structure
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Status | Process Status |  |
| Independent | boolean |  |
| Version | int |  |
