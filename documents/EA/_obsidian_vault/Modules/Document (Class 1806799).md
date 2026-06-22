---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/{MOD}Interface Consumed/REST/DMS/v2/getDocument"
domain: "Modules"
element_id: 1806799
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/{MOD}Interface Consumed/REST/DMS/v2/getDocument

## 📝 Notes

Document structure of the Documents resource

## 🔗 Connections (4)

- ← Dependency: [[findDocument (Class 1806804)]]
- ← Dependency: [[Documents (Class 1806815)]]
- ← Dependency: [[Documents (Interface 1806813)]]
- ← Dependency: [[Documents (Interface 1806813)]]

## 📊 Appears In (3 diagrams)

- Logical: CreateDocument
- Logical: findDocument
- Logical: getDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| typeCode | string |  |
| typeName | string |  |
| attributes | DocumentAttribute |  |
| creationMoment | string |  |
| files | DocumentFile |  |
