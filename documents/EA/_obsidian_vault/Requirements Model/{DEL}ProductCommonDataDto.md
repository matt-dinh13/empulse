---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-240 PSL integration with BSL (CBL-159)"
domain: "Requirements Model"
element_id: 1860344
diagrams: 2
connections: 11
tags:
  - class
  - requirements-model
---

# 🔷 {DEL}ProductCommonDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-240 PSL integration with BSL (CBL-159)

## 🔗 Connections (10)

- → Dependency «mapping»: [[{MOD}Product]]
- → Dependency: [[{DEL}ProductVariantDataDto]]
- → Dependency: [[{DEL}SubventionData]]
- → Dependency: [[{ADD}ProductSet]]
- ← Dependency: [[{DEL}GetProductDataResponse]]
- → Dependency: [[{DEL}ProductServiceTypeDataDto]]
- → Dependency: [[{DEL}ProductFinancingPackageDataDto]]
- → Dependency: [[{DEL}ProductServiceDataDto]]
- → Dependency: [[{DEL}ProductProfileProductSet]]
- → Dependency: [[{DEL}ProductCommodityTypeDataDto]]

## 📊 Appears In (2 diagrams)

- Custom: PCG-240 PSL integration with BSL (CBL-159)
- Logical: Product data synchronization mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | Text |  |
| productProfileCode | Text |  |
| productProfileName | Text |  |
| businessCategory | string |  |
| productType | Text |  |
| isDebit | boolean |  |
| initialTransactionType | string |  |
| name | Text |  |
| currency | Text |  |
| usableForPSL | boolean |  |
| validFrom | Date |  |
| validTo | Date |  |
| tariff | Text |  |
| termsAndConditions | Text |  |
| installmentDueDayShift | integer |  |
| productVariant | {DEL}ProductVariantDataDto |  |
| financingPackage | {DEL}ProductFinancingPackageDataDto |  |
| serviceType | {DEL}ProductServiceTypeDataDto |  |
| service | ProductServiceDataDto |  |
| commodityType | {DEL}ProductCommodityTypeDataDto |  |
| versionNumber | Number |  |
| versionStatus | Text |  |
| versionActivationDate | DateTime |  |
| plannedActivationDate | Date |  |
| versionTerminationDate | DateTime |  |
| incentiveProgram | string |  |
| flag | string |  |
| maxGoodsNumber | integer |  |
| useFinancingScheme | boolean |  |
| descriptionSale | string |  |
| descriptionInternal | string |  |
| productSet | string |  |
| marketingActionCodes | string |  |
| installmentScheduleGenerationTrigger | string |  |
| subvention | SubventionData |  |
| {ADD}lender | string |  |
