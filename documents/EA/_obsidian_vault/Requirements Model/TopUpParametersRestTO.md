---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9467 Count of future installments"
domain: "Requirements Model"
element_id: 1878335
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 TopUpParametersRestTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9467 Count of future installments

## 📝 Notes

Object containing the inputs for the calculation of customer offers.

## 🔗 Connections (1)

- ← Dependency: [[CashLoanCalculationOptionsTO]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9467 Count of future installments
- Logical: CustomerOfferRestV2 - CalculateCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| overlapPeriod | int |  |
| contractNumber | string |  |
| preferredDueDate | int |  |
