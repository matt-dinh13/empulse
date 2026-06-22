---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{DEL}Products"
domain: "Modules"
element_id: 1683282
diagrams: 1
connections: 8
tags:
  - class
  - modules
---

# 🔷 {DEL}Product

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog API in BSL/{DEL}Products

## 📝 Notes

{DEL PCG-3311/}

## 🔗 Connections (8)

- → Dependency: [[{DEL}DocumentPrintout]]
- → Dependency: [[{DEL}Subvention]]
- → Dependency: [[{DEL}productProfile]]
- → Dependency: [[{DEL}ProductVariant]]
- → Dependency: [[{DEL}ServiceType]]
- → Dependency: [[{DEL}Tariff]]
- → Dependency: [[{DEL}ContainerRule]]
- → Dependency: [[{DEL}CommodityType]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Products

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| currency | string |  |
| versionNumber | int |  |
| versionStatus | string |  |
| validFrom | date |  |
| validTo | date |  |
| versionActivationDate | date |  |
| plannedActivationDate | date |  |
| versionTerminationDate | date |  |
| productProfile | ProductProfile |  |
| tariff | Tariff |  |
| termsAndConditions | string |  |
| installmentDueDayShift | int |  |
| alternative | boolean |  |
| usableForPSL | boolean |  |
| incentiveProgram | boolean |  |
| maxGoodsNumber | int |  |
| useFinancingScheme | boolean |  |
| descriptionSale | string |  |
| descriptionInternal | string |  |
| approvalDocument | string |  |
| installmentScheduleGenerationTrigger | string |  |
| flags | string |  |
| productVariants | ProductVariant |  |
| containerRules | ContainerRule |  |
| financingPackages | string |  |
| commodityTypes | CommodityType |  |
| manufacturer | string |  |
| marketingAction | string |  |
| productSets | string |  |
| salesAreas | string |  |
| printoutTemplates | DocumentPrintout |  |
| services | string |  |
| serviceTypes | ServiceType |  |
| subventions | Subvention |  |
| {ADD}lender | string |  |
