---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Logical Data Model"
domain: "Modules"
element_id: 1758909
diagrams: 4
connections: 7
tags:
  - class
  - modules
---

# 🔷 Commodity Category

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Logical Data Model

## 📝 Notes

Groups of commodity types

## 🔗 Connections (7)

- ← Dependency: [[CommodityCategory (Class 1509429)]]
- ← Dependency: [[Commodity category filter]]
- ← Dependency: [[Comodity category (GUIElement 1722008)]]
- ← Dependency: [[{DEL}CommodityCategory]]
- → Dependency: [[Commodity Risk Category Type]]
- ← Association: [[Commodity Type (Class 1758904)]]
- ← Dependency: [[{DEL}CommodityCategory (Class 1816567)]]

## 📊 Appears In (4 diagrams)

- Logical: Commodity Types and Categories
- Logical: CustomerOfferWS - GetCodeList
- Logical: GetCommodityValidationRuleCodeLists
- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Name |  |
| Active | Number |  |
| Risk Category | Commodity Risk Category Type |  |
