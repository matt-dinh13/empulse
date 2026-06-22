---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model"
domain: "Analysis Model"
element_id: 1646116
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Communication Result Part

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model

## 📝 Notes

Parts of communication results (e.g. which personal data should be changed and how). Each communication record can have one or more communication results. Their structure is defined by the country configuration.

Historization holds records of all historical versions of BSL_COMMUNICATION_RESULT_PART entries. A new historization is created on each change.

## 🔗 Connections (4)

- → Dependency: [[Communication Result Type]]
- → Aggregation: [[Communication Record]]
- → Dependency: [[Communication Result Value]]
- → Dependency: [[Communication Result Type Part]]

## 📊 Appears In (1 diagrams)

- Logical: Communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Note | Text |  |
| Value | Communication Result Value |  |
| Result Type Part Code | Communication Result Type Part |  |
| Result Type Code | Communication Result Type |  |
| Created By | User |  |
| Creation Date | DateTime |  |
| Update Date | Date |  |
| Updated By | User |  |
