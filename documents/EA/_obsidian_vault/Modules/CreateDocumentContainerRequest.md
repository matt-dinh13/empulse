---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Container Services"
domain: "Modules"
element_id: 1661191
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 CreateDocumentContainerRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Container Services

## 📝 Notes

Request parameters for POST method of the DocumentContainers resource

## 🔗 Connections (2)

- ← Dependency: [[DocumentContainers]]
- → Dependency: [[DocumentTypeIn]]

## 📊 Appears In (1 diagrams)

- Logical: CreateDocumentContainer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| typeCode | string |  |
| active | bool |  |
| documentTypes | documentTypeIn |  |
