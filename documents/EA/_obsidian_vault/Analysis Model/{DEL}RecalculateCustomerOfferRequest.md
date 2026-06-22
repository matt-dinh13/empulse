---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20"
domain: "Analysis Model"
element_id: 1815089
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}RecalculateCustomerOfferRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20

## 📝 Notes

{DEL LOR-8678/}
Request for offer recalculation.

## 🔗 Connections (2)

- → Dependency: [[{DEL}ServiceChoice]]
- ← Dependency: [[{DEL}CustomerOfferWS_20]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v20 - RecalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerCode | string |  |
| offerRELIPCode | string |  |
| serviceChoice | ServiceChoice |  |
| preferredDueDay | integer |  |
| installmentScheduleMethod | string |  |
