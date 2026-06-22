---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/DebtCatalogueDetail"
domain: "Modules"
element_id: 1795931
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 debtCatalogueFullDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/DebtCatalogueDetail

## 🔗 Connections (2)

- ← Association: [[fullDebtCatalogueResponse]]
- → Dependency: [[excludedFeeOverDueDebt]]

## 📊 Appears In (1 diagrams)

- Logical: DebtCatalogueDetail

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| businessDate | string |  |
| changeReason | string |  |
| contractCode | string |  |
| countOfOverdueInstallments | integer |  |
| creditLimit | integer |  |
| dataExchangeId | string |  |
| dateOfFirstPayment | string |  |
| dateOfLatestPayment | string |  |
| daysPastDue | integer |  |
| debtCatalogueVersion | integer |  |
| dueDateOfNextInstallment | string |  |
| dueDateOfTheLatestOverdueInstallment | string |  |
| excludedFeeOverDueDebt | excludedFeeOverDueDebt |  |
| firstOverdueInstallmentDueDate | string |  |
| generalDebt | integer |  |
| generalDebtWithPenalties | integer |  |
| latestPaymentAmount | integer |  |
| nextFeeAmount | integer |  |
| nextInstallmentAmount | integer |  |
| nextInstallmentAmountWithPrepayment | integer |  |
| nextInstallmentDueDateWithPrepayment | string |  |
| nextInterestAmount | integer |  |
| nextPenaltyAmount | integer |  |
| nextPrincipalAmount | integer |  |
| nextRegularFeeAmount | integer |  |
| numberOfTheLatestOverdueInstallment | integer |  |
| overdueDebtOnFees | integer |  |
| overdueDebtOnOtherInstallments | integer |  |
| overdueDebtOnPenalties | integer |  |
| overdueInterestDebt | integer |  |
| overduePrincipalDebt | integer |  |
| previousDebtCatalogueId | integer |  |
| sumOfIncomingPayments | integer |  |
| sumOfPaidPenalties | integer |  |
| sumOfPrepayments | integer |  |
| totalCollectionServiceFees | integer |  |
| totalDebt | integer |  |
| totalDebtOnFees | integer |  |
| totalDebtOnOtherInstallments | integer |  |
| totalDebtOnPenalties | integer |  |
| totalInterestDebt | integer |  |
| totalOverdueDebt | integer |  |
| totalPrincipalDebt | integer |  |
| validFrom | dateTime |  |
| validTo | dateTime |  |
