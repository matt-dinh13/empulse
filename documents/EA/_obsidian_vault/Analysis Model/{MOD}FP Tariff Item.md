---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879585
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}FP Tariff Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

The entity keeps a financial parameter item of the tariff item type (e.g. a fee). It is concrete class of the Financial Parameter Item abstract class.

## 🔗 Connections (3)

- → Association: [[{MOD}Tariff Item]]
- → Generalization: [[Financial Parameter Item]]
- ← Generalization: [[FP Service Tariff Item]]

## 📊 Appears In (2 diagrams)

- Logical: Contract - Financial parameters
- Logical: Contract - Services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}Tariff item code | string |  |
| {ADD}Tariff item type code | string |  |
