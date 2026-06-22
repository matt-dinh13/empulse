---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1"
domain: "Analysis Model"
element_id: 1878310
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ServiceTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1

## 📝 Notes

Object containing the data of some particular service.

## 🔗 Connections (3)

- → Dependency: [[TariffTO (Class 1878323)]]
- → Dependency: [[ServiceParameterTO (Class 1878318)]]
- ← Dependency: [[CustomerOfferRestTO (Class 1878303)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV1 - GetCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| commodityCode | string |  |
| parameters | ServiceParameterTO |  |
| tariff | TariffTO |  |
| version | int |  |
