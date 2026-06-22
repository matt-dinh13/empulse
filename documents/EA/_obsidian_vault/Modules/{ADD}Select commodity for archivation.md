---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules"
domain: "Modules"
element_id: 1878997
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Select commodity for archivation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules

## 📝 Notes

{ADD PCG-5214/}
For country: VN
commodityList - list of commodities for archivation

System searches for commodities in Commodity , which fulfils following conditions:
- commodity.status = DRAFT
- commodity.categoryId is not null
- commodity.updateDate < today - 60 (data older than 60 days)
Add each commodity to the commodityList
For each commodity found check following tables
- Commodity Validation 
- Commodity Validation Cancelation 
- Commodity duplication validation 
- Commodity Duplication Validation List 
if link to commodity (commodity code, commodity id) is found in any of the table, remove the commodity from the commodityList

Return commodityList

## 🔗 Connections (1)

- ← Dependency: [[{ADD}01.630 Archive commodity (UseCase 1879021)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Commodity archivation
- Use Case: Commodity archivation
