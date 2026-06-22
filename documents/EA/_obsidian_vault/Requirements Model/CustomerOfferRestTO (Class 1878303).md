---
type: Class
stereotype: "Representation"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9690 Add Presented Interest rate in customer offer/LOR-10007 Update /customerOffers"
domain: "Requirements Model"
element_id: 1878303
diagrams: 2
connections: 9
tags:
  - class
  - requirements-model
---

# 🔷 CustomerOfferRestTO

> **Type**: Class · **Stereotype**: «Representation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9690 Add Presented Interest rate in customer offer/LOR-10007 Update /customerOffers

## 📝 Notes

Object containing the data of some particular customer offer.

## 🔗 Connections (9)

- → Dependency: [[FeeTO (Class 1878326)]]
- → Dependency: [[ServiceTO (Class 1878310)]]
- → Dependency: [[ProductTO (Class 1878316)]]
- → Dependency: [[FinancingPackageTO (Class 1878306)]]
- → Dependency: [[{ADD}CustomerOfferPresentedInterestRateTO (Class 1878315)]]
- ← Dependency: [[CustomerOfferRestTO (Class 1878309)]]
- → Dependency: [[InstallmentTO]]
- → Dependency: [[FinancingSchemeTO (Class 1878296)]]
- → Dependency: [[CommodityTO (Class 1878294)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-10007 Update /customerOffers
- Logical: CustomerOfferRestV1 - GetCustomerOffer

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
| installments | InstallmentTO |  |
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
| {ADD}presentedInterestRates | {ADD}CustomerOfferPresentedInterestRateTO |  |
