---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Generated Messages/Document Instance notifications"
domain: "Modules"
element_id: 1877942
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Generated Messages/Document Instance notifications

## 📝 Notes

{ADD CSI-1351 /}
Common structure of Document object which is notified about

## 🔗 Connections (3)

- → Generalization: [[{ADD}DocumentArchived (Class 1877943)]]
- → Usage: [[{ADD}DocumentAttribute (Class 1877944)]]
- → Usage: [[{ADD}DocumentFile (Class 1877941)]]

## 📊 Appears In (2 diagrams)

- Logical: Document Instance notifications
- Logical: Document notification (DMS)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| files | {ADD}DocumentFile |  |
| attributes | {ADD}DocumentAttribute |  |
| typeCode | string |  |
| typeName | string |  |
