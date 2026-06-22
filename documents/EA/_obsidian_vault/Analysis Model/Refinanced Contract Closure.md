---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan consolidation/Logical Data Model"
domain: "Analysis Model"
element_id: 1701897
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Refinanced Contract Closure

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan consolidation/Logical Data Model

## 📝 Notes

Contract closure information for refinanced contract.
Can be defined for external contract only (Refinanced Contract.IsInternal = 0).

Data is updated manually via GUI or via API

## 🔗 Connections (1)

- → Aggregation: [[{MOD}Refinanced Contract]]

## 📊 Appears In (1 diagrams)

- Logical: Loan consolidation - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Closure Status | boolean |  |
| Closure Date | date |  |
