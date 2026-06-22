---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product"
domain: "Modules"
element_id: 1850254
diagrams: 3
connections: 14
tags:
  - class
  - modules
---

# 🔷 {MOD}ProductDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product

## 🔗 Connections (14)

- → Dependency: [[IS generation trigger]]
- ← Dependency: [[ProductResponse]]
- ← Dependency: [[products (Class 1850263)]]
- → Dependency: [[{MOD}SubventionDto]]
- → Dependency: [[ProductServiceTypeDto]]
- → Dependency: [[ProductCommodityTypeDto]]
- → Dependency: [[ProductVariantDto]]
- → Dependency: [[ProductProfileDto (Class 1850276)]]
- → Dependency: [[Version Status (Enumeration 1873251)]]
- → Dependency: [[SalesDescriptionDto]]
- → Dependency: [[DocumentPrintoutDto]]
- → Dependency: [[ProductServiceDto]]
- → Dependency: [[ContainerRuleDto]]
- ← Dependency: [[ProductExportDto]]

## 📊 Appears In (3 diagrams)

- Logical: Product
- Logical: Product catalog export/import
- Logical: ProductDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| versionNumber | int |  |
| versionStatus | Version Status |  |
| validFrom | string |  |
| validTo | string |  |
| activationDate | string |  |
| plannedActivationDate | string |  |
| terminationDate | string |  |
| productProfileCode | string |  |
| productProfile | ProductProfileDto |  |
| tariffCode | string |  |
| termsAndConditions | string |  |
| currency | string |  |
| description | string |  |
| descriptionSale | string |  |
| maxGoodsQuantity | string |  |
| installmentScheduleGenerationTrigger | string |  |
| installmentDueDayShift | int |  |
| incentiveProgram | string |  |
| approvalDocument | string |  |
| alternative | boolean |  |
| usableForPSL | boolean |  |
| useFinancingScheme | boolean |  |
| financingPackages | string |  |
| manufacturers | string |  |
| marketingActions | string |  |
| productSets | string |  |
| salesArea | string |  |
| flags | string |  |
| productVariants | ProductVariantDto |  |
| commodityTypes | ProductCommodityTypeDto |  |
| containerRules | ContainerRuleDto |  |
| documentPrintouts | DocumentPrintoutDto |  |
| services | ProductServiceDto |  |
| serviceTypes | ProductServiceTypeDto |  |
| subventions | SubventionDto |  |
| lender | string |  |
| regularPaymentType | string |  |
| salesDescriptions | SalesDescriptionDto |  |
| {ADD}updatedByEmployeeNumber | string |  |
