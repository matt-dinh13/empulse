---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8726 RELIP cleanup - datasource"
domain: "Requirements Model"
element_id: 1878252
diagrams: 4
connections: 25
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}ConsumerLoanParametersType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8726 RELIP cleanup - datasource

## 🔗 Connections (25)

- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]
- → Dependency: [[Get application payment channel]]
- → Dependency «use»: [[FinancingPackageType]]
- → Dependency: [[Get external payment card data]]
- → Dependency: [[Get application payment channel]]
- → Dependency «use»: [[{MOD} PresentedInterestRateTypeItems]]
- → Dependency «use»: [[ServiceDataTypeItems]]
- → Dependency: [[StructuredParameters]]
- → Dependency «use»: [[FinancingSchemeType]]
- → Dependency «use»: [[ChargedFeeTypeItems (Class 1878221)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]
- → Dependency «use»: [[MoneyType (Class 1878205)]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-8726 RELIP cleanup - datasource
- Custom: LOR-9568 Datasource: add parameters to HO_CONTRACT_DATA
- Logical: HO_CONTRACT_DATA - financial data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstInstallmentDate | dateTime |  |
| lastInstallmentDate | dateTime |  |
| goodsPrice | MoneyType |  |
| loanAmount | MoneyType |  |
| netLoanAmount | MoneyType |  |
| downPayment | MoneyType |  |
| cashPayment | MoneyType |  |
| term | int |  |
| numAdvanceInstallments | int |  |
| annuity | MoneyType |  |
| totalMonthlyPayment | MoneyType |  |
| totalPaymentPerCredit | MoneyType |  |
| reimbursementAmount | MoneyType |  |
| presentedInterestRates | PresentedInterestRateTypeItems |  |
| loanPurpose | string |  |
| chargedFees | ChargedFeeTypeItems |  |
| serviceDataItems | ServiceDataTypeItems |  |
| sumOfInterest | MoneyType |  |
| sumOfFees | MoneyType |  |
| frequencyOfInstallments | string |  |
| firstInstallmentCustomerDueDate | dateTime |  |
| lastInstallmentCustomerDueDate | dateTime |  |
| netCreditLimit | MoneyType |  |
| billingDay | int |  |
| closingDay | string |  |
| installmentDueDayShift | int |  |
| initialAmount | MoneyType |  |
| rateCapLimit | decimal |  |
| cashLimit | decimal |  |
| iban | string |  |
| providedCreditLimit | MoneyType |  |
| preferredDueDate | int |  |
| installmentScheduleMethod | string |  |
| lastMonthlyPayment | MoneyType |  |
| StructuredParameters | StructuredParameters |  |
| financingScheme | FinancingSchemeType |  |
| financingPackage | FinancingPackageType |  |
