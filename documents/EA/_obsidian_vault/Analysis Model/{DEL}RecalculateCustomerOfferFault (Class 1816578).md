---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}RecalculateCustomerOffer"
domain: "Analysis Model"
element_id: 1816578
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}RecalculateCustomerOfferFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}RecalculateCustomerOffer

## 📝 Notes

{DEL LOR-8678/}
This data type defines output of the method CustomerOfferWS.RecalculateProductOffer in case of fault.

## 🔗 Connections (2)

- → Dependency: [[{DEL}RecalculateCustomerOfferResultCode (Enumeration 1816576)]]
- ← Dependency: [[{DEL}CustomerOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - RecalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | {DEL}CalculateCustomerOfferResultCode |  |
| description | string |  |
