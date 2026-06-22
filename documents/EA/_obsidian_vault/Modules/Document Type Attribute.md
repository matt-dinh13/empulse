---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Type Definition/Logical Data Model"
domain: "Modules"
element_id: 1856671
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 Document Type Attribute

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Type Definition/Logical Data Model

## 📝 Notes

This entity contains definition of attributes (and their properties) for particular document types.

## 🔗 Connections (7)

- → Dependency: [[Custom Data Definition (Class 1243901)]]
- → Dependency: [[CustomDataTypeDefinition (Class 1856668)]]
- → Dependency: [[Document Attribute Usage Type]]
- → Aggregation: [[Document Type (Class 1856881)]]
- ← Association: [[Behavior Rule]]
- ← Association: [[Behavior Rule]]
- ← Association: [[Document Attribute]]

## 📊 Appears In (1 diagrams)

- Logical: Document Type - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Description | Text |  |
| Name | Text |  |
| Sort Order | Number |  |
| Usage Type | Text |  |
| Validation Group Code | Custom Data Definition |  |
| Visible | boolean |  |
| Active Flag | boolean |  |
| Custom Data Type Code | Text |  |
| Required | Boolean |  |
| Lenght Min | int |  |
| Length Max | int |  |
| Value Min | decimal |  |
| Value Max | decimal |  |
| Invalid Message | Text |  |
