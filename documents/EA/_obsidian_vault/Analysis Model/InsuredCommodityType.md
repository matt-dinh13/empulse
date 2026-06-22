---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821397
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 InsuredCommodityType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Information about insured commodities. Special type is used instead of CommodityType to keep some independence of Insurance part of product.

## 🔗 Connections (1)

- ← Dependency «use»: [[{MOD}InsuranceType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - financial data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| name | string |  |
| producer | string |  |
| modelNumber | string |  |
| serialNumber | string |  |
| engineNumber | string |  |
| color | string |  |
| price | MoneyType |  |
| priceWithoutTax | MoneyType |  |
| IMEI | string |  |
