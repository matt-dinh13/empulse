---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878338
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 UpdateServiceTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 📝 Notes

Object containing the base data of some particular service.

## 🔗 Connections (4)

- ← Dependency: [[UpdateCustomerOfferServicesTO]]
- ← Generalization: [[InsuranceServiceTypeTO]]
- ← Generalization: [[CardServiceTypeTO]]
- → Dependency: [[UpdateServiceType (Enumeration 1878327)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV2 - UpdateOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| updateServiceType | UpdateServiceType |  |
