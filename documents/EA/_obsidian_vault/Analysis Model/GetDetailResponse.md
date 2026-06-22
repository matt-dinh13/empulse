---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Financial Parameters/v1"
domain: "Analysis Model"
element_id: 1823594
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 getDetailResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Financial Parameters/v1

## 🔗 Connections (10)

- → Dependency: [[FinancialParametersItems]]
- → Dependency: [[TariffDto]]
- ← Dependency: [[Financial Parameters (Interface 1823598)]]
- → Dependency: [[TariffVersion]]
- → Dependency: [[FinancingPackage (Class 1823599)]]
- → Dependency: [[ContractStructuredParameters]]
- → Dependency: [[FinancingScheme (Class 1823593)]]
- → Dependency: [[FpAdditionalAttributes]]
- → Dependency: [[ProductVersion]]
- → Dependency: [[ContractPresentedInterestRate]]

## 📊 Appears In (1 diagrams)

- Logical: Financial Parameters v1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
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
| financingPackage | FinancingPackage |  |
| financingScheme | FinancingScheme |  |
| financingSchemeVariantNumber | decimal |  |
| firstDueDate | string |  |
| fpAdditionalAttributes | FpAdditionalAttributes |  |
| goodsPriceAmoun | decimal |  |
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
