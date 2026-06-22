---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Logical Data Model"
domain: "Modules"
element_id: 1658956
diagrams: 3
connections: 5
tags:
  - class
  - modules
---

# 🔷 CustomDataTypeDefinition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Logical Data Model

## 📝 Notes

Definition of standard and custom types which can be used and validated:

https://git.homecredit.net/product/csi/csi-docs/-/blob/master/DMS/custom_data_type_definition.md

## 🔗 Connections (5)

- → Dependency: [[ValidatorType]]
- → Dependency: [[CustomDataType]]
- → Dependency: [[DataType (Enumeration 1658955)]]
- ← Usage: [[Insurance Custom Data Def (Class 1877913)]]
- ← Dependency: [[Document Type Attribute (Class 1877952)]]

## 📊 Appears In (3 diagrams)

- Logical: Custom Data Type - Logical Data Model
- Logical: Document Type - Logical Data Model
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | CustomDataType |  |
| DataType | DataType |  |
| ValidatorType | ValidatorType |  |
| Regex | string |  |
| EnumSource | string |  |
| EnumCode | string |  |
| CustomValidator | string |  |
