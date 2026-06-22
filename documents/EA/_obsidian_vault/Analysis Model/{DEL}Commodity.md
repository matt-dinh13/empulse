---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20/CustomerOffer - common"
domain: "Analysis Model"
element_id: 1815102
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}Commodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20/CustomerOffer - common

## 📝 Notes

{DEL LOR-8678/}
Commodity financed by the loan.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}CalculateCustomerOfferRequest]]
- ← Dependency: [[{DEL}CustomerOffer]]

## 📊 Appears In (2 diagrams)

- Logical: CustomerOffer - common
- Logical: CustomerOfferWS_v20 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| price | decimal |  |
| manufacturer | string |  |
| model | string |  |
| SKU | string |  |
| code | string |  |
| insure | boolean |  |
