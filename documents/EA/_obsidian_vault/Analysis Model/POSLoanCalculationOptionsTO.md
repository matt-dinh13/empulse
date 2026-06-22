---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878362
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 POSLoanCalculationOptionsTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (1)

- → Generalization: [[CalculationOptionsTO]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV2 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requiredLoanAmount | decimal |  |
| requiredExtraLimit | decimal |  |
| requiredTerms | int |  |
| requiredAnnualInterestRate | decimal |  |
| maximalMonthlyPayment | decimal |  |
| maximalCashPayment | decimal |  |
| commodityIds | string |  |
