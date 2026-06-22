---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Logical Data Model"
domain: "Modules"
element_id: 1856879
diagrams: 1
connections: 0
tags:
  - class
  - modules
---

# 🔷 Document Event

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Logical Data Model

## 📝 Notes

Entity used as Event data store/Oubox table for publishing event notifications into KAFKA topic

## 📊 Appears In (1 diagrams)

- Logical: Document events publishing

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Topic | string |  |
| Creation Date | DateTime |  |
| B3 | string |  |
| Content Type | string |  |
| Data | BLOB |  |
| CE Id | string |  |
| CE Time | Timestamp |  |
| CE Version Specification | string |  |
| CE Source | string |  |
| CE Type | string |  |
| CE Data Schema | string |  |
| CE Subject | string |  |
| CE Partition Key | string |  |
