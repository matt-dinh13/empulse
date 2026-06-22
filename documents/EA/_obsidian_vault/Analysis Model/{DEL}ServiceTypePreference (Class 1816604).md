---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer"
domain: "Analysis Model"
element_id: 1816604
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ServiceTypePreference

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CalculateCustomerOffer

## 📝 Notes

{DEL LOR-8678/}
Service added/removed to recalculated offer.

## 🔗 Connections (2)

- → Dependency: [[{DEL}ServiceTypePreferenceType (Enumeration 1816616)]]
- ← Dependency: [[{DEL}CalculateCustomerOfferRequest (Class 1816615)]]

## 📊 Appears In (1 diagrams)

- Logical: CalculateCustomerOfferRequest

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| preference | {DEL}ServiceTypePreferenceType |  |
