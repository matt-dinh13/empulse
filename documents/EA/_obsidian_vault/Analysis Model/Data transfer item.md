---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Logical Data Model/Data Import Structure"
domain: "Analysis Model"
element_id: 1163483
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Data transfer item

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Logical Data Model/Data Import Structure

## 📝 Notes

Data transfer usually contains more items which need to be processed (e.g. import of incoming payments consists of a lot of payments). Every item from import / export is recorded in this entity.

Data transfer items needn't to exist in some cases (e.g. for data transfers which don't do import / export, but are connected to communication with external systems).

## 🔗 Connections (2)

- → Aggregation: [[Data transfer]]
- → Dependency: [[Data transfer item status type]]

## 📊 Appears In (1 diagrams)

- Logical: Data Import Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Content | Clob |  |
| Status | Data transfer item status type |  |
| First line | Number (18) |  |
| Error code | Text (30) |  |
| Error message | Text (2000) |  |
