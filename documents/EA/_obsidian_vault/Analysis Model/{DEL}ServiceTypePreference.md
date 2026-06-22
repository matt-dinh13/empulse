---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20"
domain: "Analysis Model"
element_id: 1815098
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ServiceTypePreference

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/{DEL}CustomerOfferWS_v20

## 📝 Notes

{DEL LOR-8678/}
Service added/removed to recalculated offer.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}CalculateCustomerOfferRequest]]
- → Dependency: [[{DEL}ServiceTypePreferenceType]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v20 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| preference | {DEL}ServiceTypePreferenceType |  |
