---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Type Services"
domain: "Modules"
element_id: 1877936
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 DocumentType

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Web Service/Document Type Services

## 🔗 Connections (4)

- ← Dependency: [[GetDocumentTypeResponse (Class 1877937)]]
- → Dependency: [[AttributeType (Class 1877935)]]
- → Dependency: [[FlagType (Class 1877934)]]
- → Dependency: [[PageSpecificationType (Class 1877932)]]

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
