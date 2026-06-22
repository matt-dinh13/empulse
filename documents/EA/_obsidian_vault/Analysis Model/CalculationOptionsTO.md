---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2"
domain: "Analysis Model"
element_id: 1878351
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 CalculationOptionsTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (7)

- ← Generalization: [[POSLoanCalculationOptionsTO]]
- ← Generalization: [[SAICalculationOptionsTO]]
- ← Generalization: [[DebitCardCalculationOptionsTO]]
- ← Dependency: [[CalculateCustomerOfferRESTTO]]
- ← Generalization: [[CashLoanCalculationOptionsTO]]
- ← Generalization: [[RELWithoutInitialTransactionCalculationOptionsTO]]
- → Dependency: [[LoanOption (Enumeration 1878328)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV2 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanOption | LoanOption |  |
