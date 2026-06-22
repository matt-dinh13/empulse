---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3"
domain: "Analysis Model"
element_id: 1667384
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 OfferFinancialParameters

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v3

## 🔗 Connections (3)

- ← Dependency: [[Contract (Class 1667389)]]
- → Dependency: [[MoneyType (Class 1667383)]]
- → Dependency: [[ChargedFeeTypeItems]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditAmount | MoneyType |  |
| terms | int |  |
| annuity | MoneyType |  |
| firstDueDate | date |  |
| totalMonthlyPayment | MoneyType |  |
| cashPayment | MoneyType |  |
| chargedFees | ChargedFeeTypeItems |  |
| initialAmount | MoneyType |  |
| lastInstallmentDate | dateTime |  |
| netLoanAmount | MoneyType |  |
| reimbursementAmount | MoneyType |  |
| sumOfFees | MoneyType |  |
| sumOfInterest | MoneyType |  |
| totalPaymentPerCredit | MoneyType |  |
| downPayment | MoneyType |  |
| goodsPrice | MoneyType |  |
