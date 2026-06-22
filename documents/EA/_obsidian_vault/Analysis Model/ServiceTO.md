---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878369
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ServiceTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 📝 Notes

Object containing the data of some particular service.

## 🔗 Connections (4)

- ← Dependency: [[CustomerOfferRestTO (Class 1878360)]]
- → Dependency: [[ServiceParameterTO]]
- → Dependency: [[TariffTO]]
- → Dependency: [[{ADD}InsuranceCustomDataTO]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV2 - GetCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| commodityCode | string |  |
| parameters | ServiceParameterTO |  |
| tariff | TariffTO |  |
| {ADD}cardPickupSalesroom | string |  |
| version | int |  |
| {ADD}deliveryType | string |  |
| {ADD}embossName | string |  |
| {ADD}issueMethod | string |  |
| {ADD}insuranceCustomData | {ADD}InsuranceCustomDataTO |  |
