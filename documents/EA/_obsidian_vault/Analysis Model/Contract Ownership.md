---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879578
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Contract Ownership

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

This entity is used to hold information about owner of the contract. This information allows to differentiate amongst contracts owned solely by Home Credit, co-owned by one or more other companies (e.g. Joint financing) or owned by 3rd party (e.g. sold contracts). Ownership entity needs to keep time relation (time validity) to the contract as type of ownership and particular owners may change in time.

## 🔗 Connections (4)

- → Dependency: [[Ownership type]]
- → Dependency: [[External Reference (Boundary 1732575)]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]
- → Dependency: [[Credit Owner]]

## 📊 Appears In (2 diagrams)

- Logical: Contract
- Logical: Contract ownership

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Ownership type |  |
| Contract Owner Code | Credit Owner |  |
| Valid from | DateTime |  |
| Valid to | DateTime |  |
| Archived | boolean | false |
| Percentage | decimal |  |
