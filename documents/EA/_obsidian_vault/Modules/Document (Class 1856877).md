---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model"
domain: "Modules"
element_id: 1856877
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 Document

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Logical Data Model

## 📝 Notes

This entity represents particular documents related to a loan as well as person (possibly also related to persons defined in the SNM). The document can contain various information defined by Document Attribute (e.g. Number of document, Issue date).

## 🔗 Connections (4)

- → Association: [[Document Type (Class 1856881)]]
- ← Aggregation: [[Document DMS File]]
- ← Association: [[Document Attribute]]
- ← Dependency: [[Client Supplement Document (Class 1874466)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Supplement - Logical Data Model
- Logical: Document Instace - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Creation Date | DateTime |  |
| Checked By | User |  |
| Checked Date | DateTime |  |
| Note | String |  |
| Registered Flag | Boolean |  |
| When Created | Check Moment Type |  |
| Photo Taking Result | Photo Taking Result |  |
| External Id | String |  |
| UUID | String |  |
| Document Type | Document Type |  |
