---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Logical Data Model"
domain: "Modules"
element_id: 1673445
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Incoming Payment File

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Logical Data Model

## 📝 Notes

File containing incoming payments imported to HOSEL

## 🔗 Connections (3)

- ← Aggregation: [[Incoming Payment]]
- → Dependency: [[Incoming Payments File Type]]
- → Dependency «use»: [[Incoming Payment File Status]]

## 📊 Appears In (1 diagrams)

- Logical: Import incoming payments file domain model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Archived | Boolean |  |
| Status | Incoming Payment File Status |  |
| Sum Amount | Financial amount |  |
| Creation Date | DateTime |  |
| Imported Date | DateTime |  |
| Name | Text |  |
| Payments Count | int |  |
