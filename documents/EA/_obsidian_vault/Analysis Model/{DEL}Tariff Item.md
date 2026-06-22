---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20/CustomerOffer - common"
domain: "Analysis Model"
element_id: 1815117
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}Tariff Item

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20/CustomerOffer - common

## 📝 Notes

{DEL LOR-8678/}
Tariff items for service without calculated fee.
Only tariff item with flag SEND_IN_CALCULATE_CUST_OFFER are taking into account

## 🔗 Connections (1)

- ← Dependency: [[{DEL}Service (Class 1815131)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOffer - common

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
