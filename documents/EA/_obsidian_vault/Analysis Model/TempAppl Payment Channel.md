---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771455
diagrams: 3
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 TempAppl Payment Channel

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 📝 Notes

This class saves various payment channels for temporary application and corresponding parameters.

## 🔗 Connections (8)

- → Association: [[TempAppl Bank Account]]
- → Dependency: [[DDM Frequency Type]]
- → Dependency: [[Payment Channel Source Type]]
- → Dependency: [[Regular payment type (Class 1822522)]]
- → Dependency: [[Currency (Class 1819822)]]
- → Dependency: [[Payment Purpose Type]]
- → Aggregation: [[{MOD}Temporary Application]]
- → Dependency: [[Payment Channel Type]]

## 📊 Appears In (3 diagrams)

- Logical: Temporary Application - detail
- Logical: Temporary Application - overview
- Logical: Temporary Application - Payment Information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Purpose | Payment Purpose Type |  |
| Type | Payment Channel Type |  |
| Source Type | Payment Channel Source Type |  |
| Currency | Currency |  |
| DDM Frequency | DDM Frequency Type |  |
| DDM Limit | Financial Amount |  |
| DDM Valid From | Date |  |
| DDM Valid To | Date |  |
| DDM Regular payment | Regular payment type |  |
| DDM Regular payment amount | Amount |  |
| Truncated PAN | String |  |
| External Card ID | String |  |
| Card issuer name | String |  |
| SalesroomCode | string |  |
| DDM Type | String |  |
