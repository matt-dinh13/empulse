---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Financial Parameters/v2"
domain: "Analysis Model"
element_id: 1878382
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 getDetailResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Financial Parameters/v2

## 🔗 Connections (10)

- → Dependency: [[FinancialParametersItems]]
- → Dependency: [[TariffVersion (Class 1878383)]]
- → Dependency: [[TariffDto (Class 1878385)]]
- → Dependency: [[FinancingScheme (Class 1878381)]]
- → Dependency: [[FpAdditionalAttributes (Class 1878380)]]
- ← Dependency: [[Financial Parameters (Interface 1878379)]]
- → Dependency: [[ProductVersion (Class 1878378)]]
- → Dependency: [[FinancingPackage (Class 1878377)]]
- → Dependency: [[ContractPresentedInterestRate (Class 1878376)]]
- → Dependency: [[ContractStructuredParameters (Class 1878375)]]

## 📊 Appears In (1 diagrams)

- Logical: Financial Parameters v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}discountedGoodsPriceAmount | decimal |  |
| accountTransactionCode | string |  |
| advancedPaymentNumber | decimal |  |
| annuityAmount | decimal |  |
| billingDay | decimal |  |
| cashPayment | decimal |  |
| contractCode | string |  |
| contractPresentedInterestRate | ContractPresentedInterestRate |  |
| contractStructuredParameters | ContractStructuredParameters |  |
| creditAmount | decimal |  |
| currency | string |  |
| customerFirstDueDat | string |  |
| dayCountMethod | string |  |
| downPaymentAmount | decimal |  |
| expectedEndDate | string |  |
| financialParametersItems | FinancialParametersItems |  |
| financingPackage | FinancingPackage |  |
| financingScheme | FinancingScheme |  |
| financingSchemeVariantNumber | decimal |  |
| firstDueDate | string |  |
| fpAdditionalAttributes | FpAdditionalAttributes |  |
| goodsPriceAmount | decimal |  |
| initialTransactionType | string |  |
| installmentDueDay | decimal |  |
| installmentScheduleInterestRate | decimal |  |
| installmentScheduleMetho | string |  |
| interestRate | decimal |  |
| loanProvidingDate | string |  |
| marketingOfferId | string |  |
| minimalInstallmentAmount | decimal |  |
| netCashPayment | decimal |  |
| netCreditAmoun | decimal |  |
| netCreditLimit | decimal |  |
| offerCalculationDate | string |  |
| productVariantCode | string |  |
| productVersion | ProductVersion |  |
| providedCreditAmoun | decimal |  |
| providedCreditLimit | decimal |  |
| shiftedLastDueDate | string |  |
| tariffDto | TariffDto |  |
| tariffVersion | TariffVersion |  |
| terms | decimal |  |
| totalMonthlyPayment | decimal |  |
| totalPaymentPerCredit | decimal |  |
| {ADD}tradeInAmount | decimal |  |
| {ADD}remainingCashPayment | decimal |  |
