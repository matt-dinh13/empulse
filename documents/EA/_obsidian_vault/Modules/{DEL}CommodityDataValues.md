---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}GetCommodityData"
domain: "Modules"
element_id: 1746115
diagrams: 6
connections: 8
tags:
  - class
  - modules
---

# 🔷 {DEL}CommodityDataValues

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Interface Provided/{DEL}GetCommodityData

## 📝 Notes

{DEL PCG-3924/}

## 🔗 Connections (8)

- ← Dependency: [[{ADD}CommodityUpdateMessage]]
- ← Dependency: [[{DEL}ResultDataForUpdate]]
- ← Dependency: [[{DEL}UpdateCommodityData (Class 1746086)]]
- ← Dependency: [[{ADD}SearchCommodityDataResult]]
- ← Dependency: [[{DEL}CreateCommodityData (Class 1746069)]]
- → Dependency: [[MoneyType (Class 1878205)]]
- → Dependency: [[MoneyType (Class 1878205)]]
- ← Dependency: [[{DEL}ResultDataGet]]

## 📊 Appears In (6 diagrams)

- Logical: {DEL}GetCommodityData
- Logical: CreateCommodityData
- Logical: Generated JMS messages - Commodity Update
- Logical: GetCommodityDataForUpdate
- Logical: SearchCommodityData
- Logical: UpdateCommodityData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityTypeCode | string |  |
| colorCode | string |  |
| colorName | localizedString |  |
| deliveryTypeCode | string |  |
| deliveryTypeName | localizedString |  |
| engineNumber | text |  |
| IMEI | string |  |
| licensePlateNumber | text |  |
| modelNumber | text |  |
| name | text |  |
| ownershipBookNumber | text |  |
| price | MoneyType |  |
| priceWithoutTax | MoneyType |  |
| producerCode | string |  |
| producerName | localizedString |  |
| producerDisabled | boolean |  |
| serialNumber | text |  |
| SKU | string |  |
| SKUDisabled | boolean |  |
| validated | boolean |  |
| vehicleRegistrationExpirationDate | date |  |
| vehicleRegistrationNumber | text |  |
| MSISDN | string |  |
| refurbished | boolean |  |
| dateOfActivation | date |  |
| validationSkipped | boolean |  |
| warranty | int |  |
| {ADD}year | int |  |
