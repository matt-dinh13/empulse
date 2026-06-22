---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/EnumManagementWS"
domain: "Analysis Model"
element_id: 1718501
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 EnumItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/EnumManagementWS

## 📝 Notes

LDM: Temporary Application.* or Temporary Application-> TempAppl.*
where * means related codelist on input

## 🔗 Connections (3)

- → Dependency: [[EnumValue]]
- ← Dependency: [[GetEnumerationResponse]]
- → Dependency: [[ColumnValue]]

## 📊 Appears In (1 diagrams)

- Logical: EnumManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| value | enumValue |  |
| multivalues | columnValue |  |
| code | string |  |
| active | boolean |  |
