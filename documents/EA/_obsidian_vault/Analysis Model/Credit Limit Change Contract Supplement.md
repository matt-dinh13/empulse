---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Logical Data Model"
domain: "Analysis Model"
element_id: 1862944
diagrams: 4
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Credit Limit Change Contract Supplement

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Logical Data Model

## 📝 Notes

This class keeps data about changes on REL credit limit (both, increase and decrease).

## 🔗 Connections (6)

- → Association: [[Credit Limit Change Offer (Class 1861979)]]
- → Association: [[Financial Parameters (Class 1879562)]]
- → Association: [[Campaign Offer (Class 1861978)]]
- → Dependency: [[Credit Limit Change Source Type]]
- → Generalization: [[Contract Supplement (Class 1862126)]]
- ← Dependency: [[External Reference (Boundary 1881035)]]

## 📊 Appears In (4 diagrams)

- Logical: Contract Supplements
- Logical: ContractSystemEvent schema
- Logical: ContractSystemEvent schema
- Logical: Credit limit change offer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Original Credit Limit | Financial Amount |  |
| Required Credit Limit | Financial Amount |  |
| Source | Credit Limit Change Source Type |  |
| Estimated EIR 1 | Percentage |  |
| Estimated EIR 2 | Percentage |  |
