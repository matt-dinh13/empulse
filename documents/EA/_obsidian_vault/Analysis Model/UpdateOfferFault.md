---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21"
domain: "Analysis Model"
element_id: 1816655
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateOfferFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21

## 📝 Notes

The offer cannot be updated.

## 🔗 Connections (3)

- → Dependency: [[UpdateOfferResultCode]]
- → Dependency: [[ValidationError (Class 1816687)]]
- ← Dependency: [[CustomerOfferWS_21]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferWS_v21 - UpdateOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | {DEL}UpdateOfferResultCode |  |
| validationErrors | ValidationError |  |
