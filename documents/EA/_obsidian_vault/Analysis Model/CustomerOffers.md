---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1"
domain: "Analysis Model"
element_id: 1878290
diagrams: 5
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 CustomerOffers

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1

## 🔗 Connections (6)

- → Aggregation «Path»: [[BSL (Class 1817880)]]
- ← Aggregation «Path»: [[Recalculate (Class 1878293)]]
- ← Aggregation «Path»: [[Calculate (Class 1878291)]]
- → Usage: [[CustomerOfferRestTO (Class 1878309)]]
- → Realisation: [[02.835 Provide Product Offers for External system (UseCase 1820900)]]
- ← Aggregation «Path»: [[Services (Class 1878292)]]

## 📊 Appears In (5 diagrams)

- Logical: CustomerOfferRestV1
- Logical: CustomerOfferRestV1 - CalculateCustomerOffer
- Logical: CustomerOfferRestV1 - GetCustomerOffer
- Logical: CustomerOfferRestV1 - RecalculateCustomerOffer
- Logical: CustomerOfferRestV1 - UpdateOffer
