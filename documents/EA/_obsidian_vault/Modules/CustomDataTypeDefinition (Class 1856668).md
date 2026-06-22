---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Logical Data Model"
domain: "Modules"
element_id: 1856668
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 CustomDataTypeDefinition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Custom data types definition and validator library/Logical Data Model

## 📝 Notes

Definition of standard and custom types which can be used and validated:

https://git.homecredit.net/product/csi/csi-docs/-/blob/master/DMS/custom_data_type_definition.md

## 🔗 Connections (4)

- ← Dependency: [[Document Type Attribute]]
- → Dependency: [[DataType (Enumeration 1856670)]]
- → Dependency: [[ValidatorType (Enumeration 1856667)]]
- → Dependency: [[CustomDataType (Enumeration 1856666)]]

## 📊 Appears In (2 diagrams)

- Logical: Custom Data Type - Logical Data Model
- Logical: Document Type - Logical Data Model

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
