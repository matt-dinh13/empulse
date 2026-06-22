---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses"
domain: "Requirements Model"
element_id: 1878393
diagrams: 5
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}OfferDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses

## 🔗 Connections (8)

- → Dependency: [[installmentPlanDto]]
- → Dependency: [[SubventionDto (Class 1878395)]]
- ← Dependency: [[OffersDto]]
- → Dependency: [[REQ#2 A new output attribute remaining cash payment from product calculator]]
- → Dependency: [[{ADD}DiscountDto]]
- → Dependency: [[OfferTariffItemDto]]
- → Dependency: [[OfferServiceDto]]
- → Dependency: [[{MOD}PresentedInterestRateDto]]

## 📊 Appears In (5 diagrams)

- Custom: PCG-5652 BRID-1756 - Additional Value in CustomerOffer REST API Responses
- Custom: PCG-5669 BRPH-2800 - Discount Voucher: Apply Discounts in POS Loan Application
- Custom: PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC
- Logical: OfferDto
- Logical: Product Calculator

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| annualInterestRate | int |  |
| annuity | int |  |
| cashPayment | int |  |
| currency | string |  |
| dayCountMethod | string |  |
| debit | boolean |  |
| downPayment | int |  |
| externalOfferCode | string |  |
| financingPackageCode | string |  |
| financingPackageVersion | int |  |
| financingSchemeCode | string |  |
| financingSchemeVariantNumber | int |  |
| financingSchemeVersion | int |  |
| firstDueDate | string |  |
| firstInstallment | int |  |
| goodsPrice | int |  |
| initialTransactionInterestRate | int |  |
| initialTransactionType | string |  |
| installmentPlans | installmentPlanDto |  |
| installmentScheduleMethod | string |  |
| loanProvidingDate | string |  |
| minimalInstallment | int |  |
| netCreditAmount | int |  |
| netCreditLimit | int |  |
| offerServices | OfferServiceDto |  |
| offerTariffItems | OfferTariffItemDto |  |
| preference | int |  |
| presentedInterestRates | {MOD}PresentedInterestRateDto |  |
| productCode | string |  |
| productName | string |  |
| productType | string |  |
| productVariantCode | string |  |
| productVersion | int |  |
| providedCreditAmount | int |  |
| providedCreditLimit | int |  |
| subventionDiscount | int |  |
| subventions | SubventionDto |  |
| tariffCode | string |  |
| tariffVersion | int |  |
| terms | int |  |
| totalMonthlyPayment | int |  |
| totalPaymentPerCredit | int |  |
| validTo | string |  |
| {ADD}installmentAmountWithoutInsurance | int |  |
| {ADD}discountedGoodsPrice | int |  |
| {ADD}discount | {ADD}DiscountDto |  |
| {ADD}remainingCashPayment | int |  |
