---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7"
domain: "Analysis Model"
element_id: 1815185
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}UpdateOfferFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7

## 📝 Notes

{DEL LOR-8678/}
The offer cannot be updated.

## 🔗 Connections (3)

- → Dependency: [[ValidationError (Boundary 1815217)]]
- → Dependency: [[{DEL}UpdateOfferResultCode]]
- ← Dependency: [[{DEL}ApplicationOfferManagementWS_v7 (Interface 1815177)]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationOfferManagementWS_v7 - Update Offer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | {DEL}UpdateOfferResultCode |  |
| validationErrors | ValidationError |  |
