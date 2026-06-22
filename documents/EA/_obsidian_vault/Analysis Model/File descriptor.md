---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/Logical Data Model"
domain: "Analysis Model"
element_id: 1851452
diagrams: 4
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 File descriptor

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/User settings/Logical Data Model

## 📝 Notes

This entity is used to record basic information about files used to import data into BSL / export data from BSL.
Entity is used only when file was used. There won't be record in this entity in case of imports / exports done through a web-service.

## 🔗 Connections (4)

- ← Association: [[User Inbox Attachment]]
- ← Association: [[SecuritizationTranche]]
- ← Association: [[Import sold contracts file (Class 1851449)]]
- → Association: [[Data transfer]]

## 📊 Appears In (4 diagrams)

- Logical: Common - User
- Logical: Contract securitization - LDM
- Logical: Data Import Structure
- Logical: Import sold contracts file - Domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| FIle name | Text (255) |  |
| External flag | Boolean |  |
| Size | Number (18,0) |  |
| Location | Text (255) |  |
| Content | Blob |  |
| Hash | Text (64) |  |
