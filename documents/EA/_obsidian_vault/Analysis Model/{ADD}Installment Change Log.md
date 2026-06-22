---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model"
domain: "Analysis Model"
element_id: 1857179
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}Installment Change Log

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model

## 📝 Notes

{ADD PBR-911 /}
It keeps information about installment creation / cancellation due to some special reasons, eg. penalty waiving after manual payment pairing.

## 🔗 Connections (3)

- → Aggregation: [[Installment (Class 1857187)]]
- → Dependency: [[Installment Change Reason]]
- → Dependency: [[{ADD}Installment Change Type]]

## 📊 Appears In (1 diagrams)

- Logical: Installment Schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Creation Date | Date Time |  |
| Type Of Operation | {ADD}Installment Change Type |  |
| Change reason | Installment Change Reason  |  |
