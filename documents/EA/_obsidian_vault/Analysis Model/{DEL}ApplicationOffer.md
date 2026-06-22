---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7"
domain: "Analysis Model"
element_id: 1815208
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}ApplicationOffer

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationOfferManagementWS/{DEL}ApplicationOfferManagementWS_v7

## 📝 Notes

{DEL LOR-8678/}
Extended data about the offer related to the application.

## 🔗 Connections (4)

- → Generalization «XSDextension»: [[{DEL}V20_ CustomerOffer]]
- → Dependency: [[{DEL}OfferType]]
- → Dependency: [[{DEL}EvaluationResultType]]
- ← Dependency: [[{DEL}GetOffersResponse]]

## 📊 Appears In (1 diagrams)

- Logical: ApplicationOfferManagementWS_v7 - Get Offers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | OfferType |  |
| active | boolean |  |
| chosen | boolean |  |
| lastEvaluationResult | EvaluationResultType |  |
