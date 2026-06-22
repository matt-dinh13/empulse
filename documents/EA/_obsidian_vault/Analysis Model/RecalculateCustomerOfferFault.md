---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21"
domain: "Analysis Model"
element_id: 1816656
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RecalculateCustomerOfferFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21

## 📝 Notes

This data type defines output of the method CustomerOfferWS.RecalculateProductOffer in case of fault.

## 🔗 Connections (2)

- → Dependency: [[RecalculateCustomerOfferResultCode]]
- ← Dependency: [[CustomerOfferWS_21]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v21 - RecalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | CalculateCustomerOfferResultCode |  |
| description | string |  |
