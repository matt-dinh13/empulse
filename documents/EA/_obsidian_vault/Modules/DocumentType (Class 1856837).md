---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Type Services"
domain: "Modules"
element_id: 1856837
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 DocumentType

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Type Services

## 🔗 Connections (4)

- → Dependency: [[FlagType]]
- → Dependency: [[PageSpecificationType]]
- → Dependency: [[AttributeType (Class 1856840)]]
- ← Dependency: [[GetDocumentTypeResponse]]

## 📊 Appears In (1 diagrams)

- Logical: Document Type Services - Interface Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| owner | string |  |
| sortOrder | int |  |
| barCodePrefix | string |  |
| securityLevel | int |  |
| multiPhotoFormat | string |  |
| active | bool |  |
| flagTypes | FlagType |  |
| pageSpecificationTypes | PageSpecificationType |  |
| attributeTypes | AttributeType |  |
