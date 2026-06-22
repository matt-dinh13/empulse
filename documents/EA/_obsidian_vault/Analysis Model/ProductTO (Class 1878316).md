---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1"
domain: "Analysis Model"
element_id: 1878316
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ProductTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1

## 📝 Notes

Object containing the data of the product.

## 🔗 Connections (2)

- → Dependency: [[TariffTO (Class 1878323)]]
- ← Dependency: [[CustomerOfferRestTO (Class 1878303)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV1 - GetCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| preference | int |  |
| tariff | TariffTO |  |
| variantCode | string |  |
| version | int |  |
