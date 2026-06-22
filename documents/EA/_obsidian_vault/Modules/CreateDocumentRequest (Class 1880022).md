---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/Documents_v2"
domain: "Modules"
element_id: 1880022
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 CreateDocumentRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Instance Services/Documents_v2

## 📝 Notes

Request parameters for POST method of the Documents resource

## 🔗 Connections (3)

- → Dependency: [[DocumentAttributeRequest (Class 1880029)]]
- → Dependency: [[DocumentFileRequest]]
- ← Dependency: [[Documents (Interface 1880026)]]

## 📊 Appears In (1 diagrams)

- Logical: CreateDocument

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| typeCode | string |  |
| attributes | DocumentAttributeRequest |  |
| files | DocumentFile |  |
| creationMoment | string |  |
