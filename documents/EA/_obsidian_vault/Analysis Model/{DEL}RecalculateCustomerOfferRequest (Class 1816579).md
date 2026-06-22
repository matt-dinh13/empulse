---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}RecalculateCustomerOffer"
domain: "Analysis Model"
element_id: 1816579
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}RecalculateCustomerOfferRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}RecalculateCustomerOffer

## 📝 Notes

{DEL LOR-8678/}
Request for offer recalculation.

## 🔗 Connections (2)

- → Dependency: [[{DEL}ServiceChoice (Class 1816606)]]
- ← Dependency: [[{DEL}CustomerOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - RecalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerCode | string |  |
| offerRELIPCode | string |  |
| serviceChoice | {DEL}ServiceChoice |  |
| preferredDueDay | integer |  |
| {ADD}installmentScheduleMethod | string |  |
