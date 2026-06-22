---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model"
domain: "Modules"
element_id: 1874478
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 Supplement Document Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Supplement definition/Logical Data Model

## 📝 Notes

The entity keeps definitions of document types for respective supplement type created by system.
The document instance is created at a moment defined in Supplement Document Required Moment.
The document printout instance is created at a moment defined in Supplement Document Print Moment.

## 🔗 Connections (5)

- → Usage: [[Document Type (Class 1874462)]]
- → Usage: [[Printout Template (Class 1874543)]]
- ← Aggregation: [[Supplement Document Required Moment]]
- → Dependency: [[Signature Requirement Type]]
- → Aggregation: [[Supplement (Class 1874481)]]

## 📊 Appears In (1 diagrams)

- Logical: Supplement definition - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document Type Code | Document Type |  |
| Signature Requirement | Signature Requirement Type |  |
| Number of copies | Number |  |
| Archived | boolean |  |
| Data Source Code | string |  |
| Assign To Contract | boolean |  |
| Printout Template Code | string |  |
