---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Logical Data Model"
domain: "Modules"
element_id: 1856876
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 DMS File

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Logical Data Model

## 📝 Notes

Entity holds information about data of file which was stored/uploaded to system.

## 🔗 Connections (3)

- → Association: [[DMS File (Class 1856876)]]
- ← Association: [[DMS File (Class 1856876)]]
- ← Association: [[Document DMS File]]

## 📊 Appears In (1 diagrams)

- Logical: Document Instace - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract Supplement Code | string |  |
| Content | BLOB |  |
| Contract Code | string |  |
| External ID | String(100) |  |
| File Name | String(255) |  |
| Metadata Type | string |  |
| Path | string |  |
| Upload In Progress Flag | Boolean |  |
| User Name | string |  |
| CUID | long |  |
