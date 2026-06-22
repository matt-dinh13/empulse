---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Container Services"
domain: "Modules"
element_id: 1856810
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 UpdateDocumentContainerRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Container Services

## 📝 Notes

Request parameters for PUT method of the DocumentContainers resource

## 🔗 Connections (2)

- → Dependency: [[DocumentTypeIn (Class 1856816)]]
- ← Dependency: [[DocumentContainers (Interface 1856809)]]

## 📊 Appears In (1 diagrams)

- Logical: UpdateDocumentContainer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| typeCode | string |  |
| active | bool |  |
| documentTypes | documentTypeIn |  |
