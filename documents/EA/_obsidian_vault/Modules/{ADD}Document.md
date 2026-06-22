---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Generated Messages/Document Instance notifications"
domain: "Modules"
element_id: 1856803
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Generated Messages/Document Instance notifications

## 📝 Notes

{ADD CSI-1351 /}
Common structure of Document object which is notified about

## 🔗 Connections (3)

- → Usage: [[{ADD}DocumentFile]]
- → Generalization: [[{ADD}DocumentArchived]]
- → Usage: [[{ADD}DocumentAttribute]]

## 📊 Appears In (1 diagrams)

- Logical: Document Instance notifications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| files | {ADD}DocumentFile |  |
| attributes | {ADD}DocumentAttribute |  |
| typeCode | string |  |
| typeName | string |  |
