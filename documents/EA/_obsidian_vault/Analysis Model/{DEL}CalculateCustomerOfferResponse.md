---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20"
domain: "Analysis Model"
element_id: 1815091
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}CalculateCustomerOfferResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20

## 📝 Notes

{DEL LOR-8678/}
This data type defines output of the method CustomerOfferWS.CalculateProductOffer.

## 🔗 Connections (2)

- → Dependency: [[{DEL}CustomerOffer]]
- ← Dependency: [[{DEL}CustomerOfferWS_20]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v20 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| customerOffers | {MOD}CustomerOffer |  |
