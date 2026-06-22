---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1750954
diagrams: 3
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 Additional Person

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

Information about persons related to the client. Used for identification and verification of client.

## 🔗 Connections (7)

- → Dependency: [[Person Relation Type]]
- → Dependency: [[RelatedPerson (Boundary 1750962)]]
- ← Aggregation: [[Person (Class 1686140)]]
- → Aggregation: [[{MOD}Client Snapshot]]
- ← Aggregation: [[{MOD}Employment]]
- ← Aggregation: [[Financial Data Remittance]]
- ← Association: [[{MOD}FinancialType]]

## 📊 Appears In (3 diagrams)

- Logical: Client management
- Logical: Common - Person
- Logical: Enumerations

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Relation type | Person Relation Type |  |
| Remitter | boolean |  |
| Order | integer |  |
| External ID | string |  |
