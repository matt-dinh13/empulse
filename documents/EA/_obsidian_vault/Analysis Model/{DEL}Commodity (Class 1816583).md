---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer"
domain: "Analysis Model"
element_id: 1816583
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}Commodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer

## 📝 Notes

{DEL LOR-8678/}
Commodity financed by the loan.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}CustomerOffer (Class 1816595)]]
- ← Dependency: [[{DEL}CalculateCustomerOfferRequest (Class 1816615)]]

## 📊 Appears In (2 diagrams)

- Logical: CalculateCustomerOfferRequest
- Logical: CustomerOffer

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
