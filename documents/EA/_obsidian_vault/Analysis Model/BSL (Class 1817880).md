---
type: Class
stereotype: "Resource provider"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1"
domain: "Analysis Model"
element_id: 1817880
diagrams: 13
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BSL

> **Type**: Class · **Stereotype**: «Resource provider»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1

## 📝 Notes

https://bsl.{environment}/bsl/openapi

BSL REST API provided to external systems - for example of individual requests/responses, see e.g. https://bsl.vn00a1.cz.infra/bsl/openapi/swagger-ui.html

## 🔗 Connections (2)

- ← Aggregation «Path»: [[CustomerOffers]]
- ← Aggregation «Path»: [[DDM (Class 1817895)]]

## 📊 Appears In (13 diagrams)

- Logical: CustomerOfferRestV1
- Logical: CustomerOfferRestV1 - CalculateCustomerOffer
- Logical: CustomerOfferRestV1 - GetCustomerOffer
- Logical: CustomerOfferRestV1 - RecalculateCustomerOffer
- Logical: CustomerOfferRestV1 - UpdateOffer
- Logical: CustomerOfferRestV2 - UpdateOffer
- Logical: DirectDebitMandateRestV2
- Logical: DirectDebitMandateRestV2 - CreateDDM
- Logical: DirectDebitMandateRestV2 - CreateDDMDraft
- Logical: DirectDebitMandateRestV2 - GetDDM
- Logical: DirectDebitMandateRestV2 - UpdateDDMOrDraft
- Logical: DirectDebitMandateRestV2 - UpdateECSProvider
- Logical: DirectDebitMandateRestV2 - ValidateDDM
