---
type: Class
stereotype: "Resource"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878332
diagrams: 5
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 CustomerOffers

> **Type**: Class · **Stereotype**: «Resource»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 🔗 Connections (6)

- ← Aggregation «Path»: [[Recalculate (Class 1878333)]]
- ← Aggregation «Path»: [[Calculate (Class 1878334)]]
- → Realisation: [[02.835 Provide Product Offers for External system (UseCase 1820900)]]
- → Usage: [[CustomerOfferRestTO]]
- ← Aggregation «Path»: [[Services (Class 1878331)]]
- → Aggregation: [[BSL (Class 1878278)]]

## 📊 Appears In (5 diagrams)

- Logical: CustomerOfferRestV2
- Logical: CustomerOfferRestV2 - CalculateCustomerOffer
- Logical: CustomerOfferRestV2 - GetCustomerOffer
- Logical: CustomerOfferRestV2 - RecalculateCustomerOffer
- Logical: CustomerOfferRestV2 - UpdateOffer
