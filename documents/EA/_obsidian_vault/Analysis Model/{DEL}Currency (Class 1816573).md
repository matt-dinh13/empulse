---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList"
domain: "Analysis Model"
element_id: 1816573
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}Currency

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList

## 📝 Notes

{DEL LOR-8678/}
This data type defines active currencies (see code list Currency).

## 🔗 Connections (3)

- → Dependency: [[{DEL}LocalizedString (Class 1816599)]]
- → Dependency: [[Currency (Class 1819822)]]
- ← Dependency: [[{DEL}GetCodeListResponse (Class 1816566)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetCodeList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | LocalizedString |  |
