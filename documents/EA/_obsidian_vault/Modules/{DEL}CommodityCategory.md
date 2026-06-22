---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationRuleCodeLists"
domain: "Modules"
element_id: 1746822
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {DEL}CommodityCategory

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}GetCommodityValidationRuleCodeLists

## 📝 Notes

{DEL PCG-3924/}
This data type defines list of Commodity Category.
If not successfully retrieved then add NOTAVAILABLE_COMMODITYCATEGORY to GetCommodityVatidationRuleCodeListsResponse.errorCode.

## 🔗 Connections (2)

- → Dependency: [[Commodity Category (Class 1758909)]]
- ← Dependency: [[{DEL}GetCommodityValidationRuleCodeListsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GetCommodityValidationRuleCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | LocalizedString |  |
| sortOrder | Number |  |
| active | boolean |  |
