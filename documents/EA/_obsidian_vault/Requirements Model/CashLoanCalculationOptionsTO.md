---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9436 Calculate offer for TopUp"
domain: "Requirements Model"
element_id: 1878342
diagrams: 3
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 CashLoanCalculationOptionsTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9436 Calculate offer for TopUp

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (2)

- → Generalization: [[CalculationOptionsTO]]
- → Dependency: [[TopUpParametersRestTO]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9436 Calculate offer for TopUp
- Custom: LOR-9467 Count of future installments
- Logical: CustomerOfferRestV2 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| topUpParameters | TopUpParametersRestTO |  |
| requiredLoanAmount | decimal |  |
| requiredExtraLimit | decimal |  |
| requiredTerms | int |  |
| requiredAnnualInterestRate | decimal |  |
| maximalMonthlyPayment | decimal |  |
| maximalCashPayment | decimal |  |
