---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Rounding/Logical Data model"
domain: "Analysis Model"
element_id: 1238148
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Rounding Definition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Rounding/Logical Data model

## 📝 Notes

This entity keeps setting for rounding on different parts of the system (e.g. rounding of required credit limit entered by the user).

## 🔗 Connections (3)

- → Dependency: [[Rounding (Enumeration 1238151)]]
- → Dependency: [[Rounding Definition Usage Type]]
- → Dependency: [[Rounding Scale Type]]

## 📊 Appears In (1 diagrams)

- Logical: Rounding - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| usage | Rounding Definition Usage Type |  |
| roundingType | Rounding |  |
| roundingScale | Rounding Scale Type |  |
