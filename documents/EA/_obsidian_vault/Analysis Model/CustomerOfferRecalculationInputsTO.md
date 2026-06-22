---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878367
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CustomerOfferRecalculationInputsTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 📝 Notes

Object containing the inputs for the recalculation of some particular customer offer.

## 🔗 Connections (2)

- → Dependency: [[ServiceChoiceTO]]
- ← Dependency: [[Recalculate (Class 1878333)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV2 - RecalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerCode | string |  |
| serviceChoice | ServiceChoiceTO |  |
| preferredDueDay | int |  |
| installmentScheduleMethod | string |  |
