---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product"
domain: "Modules"
element_id: 1850277
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 ProductInputDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product

## 🔗 Connections (3)

- → Dependency: [[StringCollectionInputDto]]
- → Dependency: [[Input (Class 1873252)]]
- ← Dependency: [[products (Class 1850263)]]

## 📊 Appears In (2 diagrams)

- Logical: Product
- Logical: ProductInputDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| versionStatus | string |  |
| validFrom | string |  |
| validTo | string |  |
| plannedActivationDate | string |  |
| productProfileCode | string |  |
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
| lender | string |  |
| financingPackages | StringCollectionInputDto |  |
| manufacturers | StringCollectionInputDto |  |
| marketingActions | StringCollectionInputDto |  |
| productSets | StringCollectionInputDto |  |
| salesArea | StringCollectionInputDto |  |
| flags | StringCollectionInputDto |  |
| productVariants | Input |  |
| commodityTypes | Input |  |
| containerRules | Input |  |
| documentPrintouts | Input |  |
| services | Input |  |
| serviceTypes | Input |  |
| subventions | Input |  |
| regularPaymentType | string |  |
