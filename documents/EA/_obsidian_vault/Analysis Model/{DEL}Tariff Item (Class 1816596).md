---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOffer - COMMON"
domain: "Analysis Model"
element_id: 1816596
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}Tariff Item

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOffer - COMMON

## 📝 Notes

{DEL LOR-8678/}

Tariff items for service without calculated fee.
Only tariff item with flag SEND_IN_CALCULATE_CUST_OFFER are taking into account

## 🔗 Connections (1)

- ← Dependency: [[{DEL}Service (Class 1816588)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tariffItemTypeCode | string |  |
| calculationMethodType | string |  |
| amount | int |  |
| percentage | int |  |
| percentageBasedOn | string |  |
| roundingType | string |  |
| taxPercentage | int |  |
| annualRateProjection | string |  |
| roundingScale | int |  |
