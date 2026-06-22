---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Container Services"
domain: "Modules"
element_id: 1856812
diagrams: 3
connections: 4
tags:
  - class
  - modules
---

# 🔷 DocumentContainer

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Container Services

## 🔗 Connections (4)

- ← Dependency: [[CreateDocumentContainerResponse (Class 1856815)]]
- ← Dependency: [[UpdateDocumentContainerResponse (Class 1856813)]]
- → Dependency: [[DocumentTypeOut (Class 1856811)]]
- ← Dependency: [[GetDocumentContainerResponse (Class 1856807)]]

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
