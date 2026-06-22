---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Logical Data Model"
domain: "Modules"
element_id: 1880216
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Document

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Logical Data Model

## 📝 Notes

This entity represents particular documents related to a loan as well as person (possibly also related to persons defined in the SNM). The document can contain various information defined by Document Attribute (e.g. Number of document, Issue date).

## 🔗 Connections (3)

- ← Association: [[{MOD CSI-4601}Document Attribute]]
- → Association: [[Document Type (Class 1877954)]]
- ← Aggregation: [[Document DMS File (Class 1880214)]]

## 📊 Appears In (1 diagrams)

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
