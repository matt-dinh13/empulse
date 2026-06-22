---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Logical Data model"
domain: "Analysis Model"
element_id: 1408745
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 SecuritizationTranche

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract securitization/Logical Data model

## 📝 Notes

It keeps information about one imported securitization tranche.

## 🔗 Connections (4)

- → Dependency: [[Credit Owner]]
- ← Aggregation: [[ContractSecuritization]]
- → Association: [[File descriptor]]
- → Dependency: [[SecuritizationTrancheStatusType]]

## 📊 Appears In (1 diagrams)

- Logical: Contract securitization - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | string |  |
| Status | SecuritizationTrancheStatusType |  |
| StatusMessage | text |  |
| Investor | Credit Owner |  |
| SalesDate | Date |  |
