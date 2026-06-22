---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21"
domain: "Analysis Model"
element_id: 1816657
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetCustomerOfferFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21

## 📝 Notes

This data type defines output of the method CustomerOfferWS.GetCustomerOffer in case of fault.

## 🔗 Connections (2)

- → Dependency: [[GetCustomerOfferResultCode]]
- ← Dependency: [[CustomerOfferWS_21]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v21 - GetCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | CalculateCustomerOfferResultCode |  |
| description | string |  |
