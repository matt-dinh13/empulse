---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1264887
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Filter available sales packages for an assignment to salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface

## 📝 Notes

{ADD PCG-822_17/}
Algorithm for filtering of sales packages in Available Sales Packages grid.

User can fill search criteria (code, name) for filtering sales packages and after pressing on Search button system filters grid according entered search criteria.
For example:
If both code and name are filled, only sales packages items having both properties are displayed.

For all text fields, it does not have to be exact match (case insensitive and full text search).
For example:
For input equal to MuJProD4, output can be equal to MmUjproD48

## 🔗 Connections (1)

- ← Dependency: [[Available Sales Packages]]

## 📊 Appears In (1 diagrams)

- Custom: Assign Sales Package to Salesroom
