---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v2.0/Contract Commodities"
domain: "Analysis Model"
element_id: 1833330
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Commodity

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Customers/v2.0/Contract Commodities

## 📝 Notes

Commodity data is obtained by calling CommodityWS.GetCommodityData method.

## 🔗 Connections (2)

- → Dependency: [[MoneyType (Class 1844137)]]
- → Aggregation: [[GetContractCommoditiesResponse]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Commodities

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commodityType | string |  |
| name | string |  |
| producer | string |  |
| modelNumber | string |  |
| serialNumber | string |  |
| engineNumber | string |  |
| imei | string |  |
| color | string |  |
| {ADD}commodityID | string |  |
| price | MoneyType |  |
| {ADD}mSISDN | string |  |
