---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/{ADD}Interface provided/{ADD}GetDataForProductCalculator"
domain: "Analysis Model"
element_id: 1401677
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ResultDataForProductCalculator

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/{ADD}Interface provided/{ADD}GetDataForProductCalculator

## 🔗 Connections (4)

- → Dependency: [[ProductType (Class 1401678)]]
- → Dependency: [[CommodityCategory]]
- ← Dependency: [[GetDataForProductCalculatorResponse]]
- → Dependency: [[ResultCode]]

## 📊 Appears In (1 diagrams)

- Logical: {ADD}GetDataForProductCalculator

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | string |  |
| productType | ProductType |  |
| commodityCategory | CommodityCategory |  |
| resultCode | ResultCode |  |
| description | string |  |
