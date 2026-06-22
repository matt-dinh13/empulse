---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1"
domain: "Analysis Model"
element_id: 1878312
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 RELWithoutInitialTransactionCalculationOptionsTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (1)

- → Generalization: [[CalculationOptionsTO (Class 1878321)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV1 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requiredLoanAmount | decimal |  |
| requiredExtraLimit | decimal |  |
| maximalMonthlyPayment | decimal |  |
| maximalCashPayment | decimal |  |
