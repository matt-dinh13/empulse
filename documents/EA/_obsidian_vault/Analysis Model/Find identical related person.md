---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1817743
diagrams: 2
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Find identical related person

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

If personID is not null, appropriate record is found.
Otherwise country specific attributes are compared

- IN - Equality data rule for related person - IN
- ID - Equality data rule for related person - ID
- PH - Equality data rule for related person - PH
- KZ - Equality data rule for related person - KZ
- VN - Equality data rule for related person - VN

If exists a record where value of all these attributes equals values from input, the record is considered as identical.

## 🔗 Connections (6)

- ← Generalization: [[Equality data rule for related person - IN]]
- ← Generalization: [[Equality data rule for related person - PH]]
- ← Dependency: [[{MOD}Find identical records]]
- ← Generalization: [[Equality data rule for related person - VN]]
- ← Generalization: [[Equality data rule for related person - ID]]
- ← Generalization: [[Equality data rule for related person - KZ]]

## 📊 Appears In (2 diagrams)

- Custom: Product business rules
- Custom: Update application - Business rules
