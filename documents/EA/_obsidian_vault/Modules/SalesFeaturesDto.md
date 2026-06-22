---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Interface provided"
domain: "Modules"
element_id: 1728220
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 SalesFeaturesDto

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Interface provided

## 🔗 Connections (6)

- → Dependency: [[CommodityCategoryDto]]
- → Dependency: [[{MOD}SalesFeaturesDtoCardTypes]]
- → Dependency: [[ProductTypeDto]]
- ← Dependency: [[sales-features]]
- → Dependency: [[{MOD}QualificationCriteriaDto]]
- → Dependency: [[{MOD}ServiceTypePreferenceDto]]

## 📊 Appears In (2 diagrams)

- Logical: Sales Features
- Logical: SalesFeaturesDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | string |  |
| commodityCategories | CommodityCategoryDto |  |
| cardTypes | {MOD}SalesFeaturesDtoCardTypes |  |
| manufacturers | {ADD}CodeNameItemDto |  |
| manrketingActions | {ADD}CodeNameItemDto |  |
| maxGoodsQuantity | int |  |
| productSets | {ADD}CodeNameItemDto |  |
| productTypes | ProductTypeDto |  |
| serviceTypePreference | {MOD}ServiceTypePreferenceDto |  |
| standaloneInsuranceServiceTypes | {ADD}CodeNameItemDto |  |
| qualificationCriteria | {MOD}QualificationCriteriaDto |  |
