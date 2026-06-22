---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Logical Data Model"
domain: "Analysis Model"
element_id: 1556402
diagrams: 4
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Salesman

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Logical Data Model

## 🔗 Connections (7)

- → Association: [[Person (Class 1686140)]]
- → Association: [[Salesroom Salesman]]
- ← Dependency: [[Salesman Type]]
- ← Dependency: [[Salesman Type]]
- ← Dependency: [[{MOD}Temporary Application]]
- ← Dependency: [[Salesman (GUIElement 1822271)]]
- ← Association: [[Contract Supplement (Class 1862126)]]

## 📊 Appears In (4 diagrams)

- Logical: Contract Supplements
- Logical: Salesroom
- Logical: SNM Salesroom Synchronization
- Logical: Temporary Application - Attributes, Types and Enumerations

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Active | Boolean |  |
| Synchronization Code | text(20) |  |
