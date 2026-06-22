---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model"
domain: "Analysis Model"
element_id: 1646121
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Communication Event

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model

## 📝 Notes

One communication event between a client and HC through one communication channel. This can be one incoming phone call from the client during which they can communicate multiple issues - one communication record is created for each such issue under this communication event.

Historization holds records of all historical versions of BSL_COMMUNICATION_EVENT entries. A new historization is created on each change.

## 🔗 Connections (3)

- → Association: [[Client (Class 1750952)]]
- → Dependency: [[Communication Processing Status]]
- ← Aggregation: [[Communication Record]]

## 📊 Appears In (2 diagrams)

- Logical: Communication
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created By | User |  |
| Creation Date | DateTime |  |
| Update Date | Date |  |
| Updated By | User |  |
| Processing Status | Communication Processing Status |  |
| Channel Code | Communication Channel |  |
| System | string |  |
| Assigned To User | User |  |
