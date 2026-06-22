---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1"
domain: "Analysis Model"
element_id: 1878301
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 UpdateServiceTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1

## 📝 Notes

Object containing the base data of some particular service.

## 🔗 Connections (4)

- ← Dependency: [[UpdateCustomerOfferServicesTO (Class 1878313)]]
- ← Generalization: [[InsuranceServiceTypeTO (Class 1878324)]]
- ← Generalization: [[CardServiceTypeTO (Class 1878325)]]
- → Dependency: [[UpdateServiceType]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV1 - UpdateOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| updateServiceType | UpdateServiceType |  |
