---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCustomerOffer"
domain: "Analysis Model"
element_id: 1816540
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}GetCustomerOfferFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}GetCustomerOffer

## 📝 Notes

{DEL LOR-8678/}

This data type defines output of the method CustomerOfferWS.GetCustomerOffer in case of fault.

## 🔗 Connections (2)

- → Dependency: [[{DEL}GetCustomerOfferResultCode (Enumeration 1816543)]]
- ← Dependency: [[{DEL}CustomerOfferWS]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS - GetCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | {DEL}CalculateCustomerOfferResultCode |  |
| description | string |  |
