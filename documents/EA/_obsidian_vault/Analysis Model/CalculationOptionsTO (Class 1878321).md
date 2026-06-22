---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1"
domain: "Analysis Model"
element_id: 1878321
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 CalculationOptionsTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (7)

- ← Generalization: [[POSLoanCalculationOptionsTO (Class 1878319)]]
- ← Dependency: [[CalculateCustomerOfferRESTTO (Class 1878317)]]
- ← Generalization: [[DebitCardCalculationOptionsTO (Class 1878314)]]
- ← Generalization: [[RELWithoutInitialTransactionCalculationOptionsTO (Class 1878312)]]
- ← Generalization: [[SAICalculationOptionsTO (Class 1878300)]]
- ← Generalization: [[CashLoanCalculationOptionsTO (Class 1878295)]]
- → Dependency: [[{ADD}LoanOption]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerOfferRestV1 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanOption | LoanOption |  |
