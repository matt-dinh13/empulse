---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878345
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ServiceChoiceTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 📝 Notes

Object containing the data of some particular service to be added to/removed from the offer.

## 🔗 Connections (1)

- ← Dependency: [[CustomerOfferRecalculationInputsTO]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV2 - RecalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service | string |  |
| choice | boolean |  |
| commodityCode | string |  |
