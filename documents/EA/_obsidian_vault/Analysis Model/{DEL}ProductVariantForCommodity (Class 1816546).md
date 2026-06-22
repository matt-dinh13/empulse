---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity"
domain: "Analysis Model"
element_id: 1816546
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ProductVariantForCommodity

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetProductsForCommodity

## 📝 Notes

{DEL LOR-8678/}
Information about Product Variants available for financing of desired commodity.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}ProductForCommodity (Class 1816553)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetProductsForCommodity

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| {ADD}preference | string |  |
| creditAmountMin | decimal |  |
| creditAmountMax | decimal |  |
| {ADD}cashPaymentCalcMethod | string |  |
| {ADD}cashPaymentMinAmount | decimal |  |
| {ADD}cashPaymentMaxAmount | decimal |  |
| cashPaymentMinRate | decimal |  |
| cashPaymentMaxRate | decimal |  |
| annualInterestRate | decimal |  |
| terms | integer |  |
