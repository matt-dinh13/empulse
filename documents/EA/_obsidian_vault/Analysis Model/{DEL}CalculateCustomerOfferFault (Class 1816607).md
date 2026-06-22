---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer"
domain: "Analysis Model"
element_id: 1816607
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}CalculateCustomerOfferFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer

## 📝 Notes

{DEL LOR-8678/}
This data type defines output of the method CustomerOfferWS.CalculateProductOffer in case of fault.

## 🔗 Connections (2)

- → Dependency: [[{DEL}CalculateCustomerOfferResultCode (Enumeration 1816611)]]
- ← Dependency: [[{DEL}CustomerOfferWS]]

## 📊 Appears In (2 diagrams)

- Logical: CalculateCustomerOfferFault
- Logical: CustomerOfferWS - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | {DEL}CalculateCustomerOfferResultCode |  |
