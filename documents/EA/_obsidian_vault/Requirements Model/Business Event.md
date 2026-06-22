---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening"
domain: "Requirements Model"
element_id: 1846360
diagrams: 4
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 Business Event

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening

## 📝 Notes

This entity keeps information about contract updates and event related to the contract (e.g. significant events on insurance, card account etc.).

## 🔗 Connections (5)

- → Dependency: [[{MOD}Business Event Type]]
- → Dependency: [[Allowed combinations of business event types and attribute types]]
- ← Aggregation: [[BusinessEventAttribute]]
- → Association: [[User (Class 1572279)]]
- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (4 diagrams)

- Custom: PAYM-1903 (CBL-4667) IN JL - Generate IS on basis of JL account opening
- Logical: Business event - Logical data model
- Logical: Contract
- Logical: Contract Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Modification Type | {MOD}Business Event Type |  |
| Modification Date | DateTime |  |
| Is Internal User | int |  |
| Salesroom Code | string |  |
