---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/VN/CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)"
domain: "Requirements Model"
element_id: 1852292
diagrams: 8
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}CommodityDto

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/VN/CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)

## 🔗 Connections (6)

- → Dependency: [[LocalizedString (Class 1844806)]]
- ← Dependency: [[CommodityResult]]
- ← Dependency: [[CommodityForUpdate]]
- ← Dependency: [[commodites]]
- ← Dependency: [[UpdateCommodityDto]]
- ← Dependency: [[{MOD}Commodity (Class 1879036)]]

## 📊 Appears In (8 diagrams)

- Custom: CBL-27867 [TTPL] Implement TTPL Payment Flow (INI-1418)
- Custom: PCG-4746 CBL-24598 [SUBVENTION] UPDATE OPPO IMEI VALIDATION INFORMATION
- Custom: PCG-5108 -SAMSUNG - HA validation Integration - Hosel origination
- Logical: commodities
- Logical: commodities-for-update
- Logical: commodities-validation
- Logical: commodities-validation-cancelation
- Logical: CommodityDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| serialId | int |  |
| name | string |  |
| commodityTypeCode | string |  |
| price | int |  |
| priceWithoutTax | int |  |
| currency | int |  |
| colorCode | string |  |
| colorName | localizedString |  |
| deliveryTypeCode | string |  |
| deliveryTypeName | localizedString |  |
| engineNumber | string |  |
| imei | string |  |
| licensePlateNumber | string |  |
| modelNumber | string |  |
| ownershipBookNumber | string |  |
| serialNumber | string |  |
| msisdn | string |  |
| vehicleRegistrationNumber | string |  |
| vehicleRegistrationExpirationDate | string |  |
| producerCode | string |  |
| producerName | localizedString |  |
| producerFreeText | string |  |
| producerDisabled | boolean |  |
| sku | string |  |
| skuDisabled | boolean |  |
| warranty | int |  |
| validated | boolean |  |
| validationSkipped | boolean |  |
| refurbished | boolean |  |
| dateOfActivation | string |  |
| validationSkippable | boolean |  |
| year | int |  |
| description | string |  |
| validationSkippedBy | string |  |
| validationSkippedDate | date |  |
| status | string |  |
| modelCode | string |  |
| validationCanceled | boolean |  |
| deviceApp | string |  |
| scanned | boolean |  |
| quoteId | string |  |
| imeiChannel | string |  |
| UniqueReferenceNumber | string |  |
| {ADD}categoryId | string |  |
| {ADD}categoryName | string |  |
