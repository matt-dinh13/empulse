---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9690 Add Presented Interest rate in customer offer/LOR-10007 Update /customerOffers"
domain: "Requirements Model"
element_id: 1878360
diagrams: 5
connections: 10
tags:
  - class
  - requirements-model
---

# 🔷 CustomerOfferRestTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9690 Add Presented Interest rate in customer offer/LOR-10007 Update /customerOffers

## 📝 Notes

Object containing the data of some particular customer offer.

## 🔗 Connections (10)

- → Dependency: [[StructuredParametersTO]]
- → Dependency: [[FinancingSchemeTO]]
- → Dependency: [[ServiceTO]]
- → Dependency: [[FinancingPackageTO]]
- → Dependency: [[ProductTO]]
- ← Dependency: [[CustomerOfferRestTO]]
- → Dependency: [[{ADD}SubventionTO]]
- → Dependency: [[FeeTO]]
- → Dependency: [[{ADD}CustomerOfferPresentedInterestRateTO]]
- → Dependency: [[CommodityTO]]

## 📊 Appears In (5 diagrams)

- Custom: LOR-10007 Update /customerOffers
- Custom: LOR-10332 Add Subvention Discount in Customer Offer REST response
- Custom: LOR-9247 BSL: CustomerOfferRest v2
- Custom: LOR-9913 Add attributes to GET of CustomerOffer endpoint
- Logical: CustomerOfferRestV2 - GetCustomerOffer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| annualInterestRate | decimal |  |
| annuity | decimal |  |
| billingDay | int |  |
| cashPayment | decimal |  |
| code | string |  |
| commodities | CommodityTO |  |
| creditAmount | decimal |  |
| downPayment | decimal |  |
| fees | FeeTO |  |
| financingPackage | FinancingPackageTO |  |
| financingScheme | FinancingSchemeTO |  |
| installmentScheduleMethod | string |  |
| {DEL}installments | InstallmentTO |  |
| limitId | string |  |
| loanAmount | decimal |  |
| minimalInstallmentAmount | decimal |  |
| netCreditAmount | decimal |  |
| netCreditLimit | decimal |  |
| preferredDueDay | int |  |
| presentedInterestRate1 | decimal |  |
| presentedInterestRate2 | decimal |  |
| presentedInterestRate3 | decimal |  |
| product | ProductTO |  |
| providedCreditLimit | decimal |  |
| services | ServiceTO |  |
| sourceOfferId | string |  |
| terms | int |  |
| totalInstallment | decimal |  |
| totalInsurancePremium | decimal |  |
| totalPaymentPerCredit | decimal |  |
| totalPrice | decimal |  |
| validTo | dateTime |  |
| installmentSchedule | string |  |
| parameters | StructuredParametersTO  |  |
| {ADD}firstDueDate | date |  |
| {ADD}dayCountMethod | string |  |
| {ADD}presentedInterestRates | {ADD}CustomerOfferPresentedInterestRateTO |  |
| {ADD}subventionDiscount | decimal |  |
| {ADD}subventions | {ADD}SubventionTO |  |
| {ADD}discountedTotalPrice | decimal |  |
| {ADD}remainingCashPayment | string |  |
