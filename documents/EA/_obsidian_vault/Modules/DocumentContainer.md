---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Container Services"
domain: "Modules"
element_id: 1661183
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 DocumentContainer

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Container Services

## 🔗 Connections (4)

- ← Dependency: [[GetDocumentContainerResponse]]
- ← Dependency: [[UpdateDocumentContainerResponse]]
- ← Dependency: [[CreateDocumentContainerResponse]]
- → Dependency: [[DocumentTypeOut]]

## 📊 Appears In (3 diagrams)

- Logical: CreateDocumentContainer
- Logical: GetDocumentContainer
- Logical: UpdateDocumentContainer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| typeCode | string |  |
| typeName | string |  |
| documentTypes | DocumentTypeOut |  |
| active | bool |  |
