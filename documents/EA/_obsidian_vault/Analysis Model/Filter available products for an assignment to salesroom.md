---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1746893
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Filter available products for an assignment to salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/User Interface

## 📝 Notes

Algorithm for filtering of results in Available Products grid.

User can fill search criteria (product code, product name, manufacturer code and commodity type) for filtering products and after pressing on Search button system filters grid according entered search criteria.
For example:
If both manufacturer code and commodity type are filled, only products having both properties are displaye

For all text fields, it does not have to be exact match (case insensitive and full text search).
For example:
For input equal to MuJProD4, output can be equal to MmUjproD48

## 🔗 Connections (2)

- ← Dependency: [[Available Products]]
- ← Dependency: [[09.270 Assign product to salesroom (UseCase 1746868)]]

## 📊 Appears In (2 diagrams)

- Custom: Assign product to salesroom
- Use Case: Manage Products on Salesroom
