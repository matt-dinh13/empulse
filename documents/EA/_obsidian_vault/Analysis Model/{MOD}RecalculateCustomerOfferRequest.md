---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21"
domain: "Analysis Model"
element_id: 1816659
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}RecalculateCustomerOfferRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21

## 📝 Notes

Request for offer recalculation.

## 🔗 Connections (2)

- → Dependency: [[ServiceChoice]]
- ← Dependency: [[CustomerOfferWS_21]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v21 - RecalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerCode | string |  |
| serviceChoice | ServiceChoice |  |
| preferredDueDay | integer |  |
| installmentScheduleMethod | string |  |
