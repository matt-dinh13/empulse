---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList"
domain: "Analysis Model"
element_id: 1816567
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}CommodityCategory

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCodeList

## 📝 Notes

{DEL LOR-8678/}
This data type defines active commodity categories (see code list Commodity Category). Only categories related to types provided in CommodityType are provided.

## 🔗 Connections (2)

- → Dependency: [[Commodity Category (Class 1758909)]]
- ← Dependency: [[{DEL}GetCodeListResponse (Class 1816566)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetCodeList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | {DEL}LocalizedString |  |
| sortOrder | Number |  |
