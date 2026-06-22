---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesroomSalesItem"
domain: "Modules"
element_id: 1775309
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {DEL}SalesroomSalesItemValues

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesroomSalesItem

## 📝 Notes

{DEL PCG-4293/}
For evaluation see search filter in UC 09.308 Get Salesroom Sales Item.

## 🔗 Connections (4)

- → Dependency: [[{MOD}Product]]
- → Dependency: [[Service (Class 1880804)]]
- → Dependency: [[Sales Package Item Type]]
- ← Dependency: [[{DEL}ResultGetSalesroomSalesItem]]

## 📊 Appears In (1 diagrams)

- Logical: GetSalesroomSalesItems

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | string |  |
| itemType | string |  |
| itemCode | string |  |
| validFrom | datetime |  |
| validTo | datetime |  |
