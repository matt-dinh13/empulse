---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Instance Services/Documents_v2"
domain: "Modules"
element_id: 1856965
diagrams: 3
connections: 5
tags:
  - class
  - modules
---

# 🔷 Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Instance Services/Documents_v2

## 📝 Notes

Document structure of the Documents resource

## 🔗 Connections (5)

- → Dependency: [[DocumentFile (Class 1856960)]]
- → Dependency: [[DocumentAttribute (Class 1856962)]]
- ← Dependency: [[Documents (Interface 1856833)]]
- ← Dependency: [[Documents (Interface 1856833)]]
- ← Dependency: [[Documents (Class 1856963)]]

## 📊 Appears In (3 diagrams)

- Logical: CreateDocument
- Logical: FindDocument
- Logical: GetDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uuid | string |  |
| typeCode | string |  |
| typeName | string |  |
| creationMoment | string |  |
| attributes | DocumentAttribute |  |
| files | DocumentFile |  |
