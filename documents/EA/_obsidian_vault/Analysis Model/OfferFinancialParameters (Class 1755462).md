---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2"
domain: "Analysis Model"
element_id: 1755462
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 OfferFinancialParameters

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Financial Partnership/FinancialPartnershipService_v2

## 🔗 Connections (3)

- → Dependency: [[MoneyType (Class 1878205)]]
- → Dependency: [[ChargedFeeTypeItems (Class 1755461)]]
- ← Dependency: [[Contract (Class 1755454)]]

## 📊 Appears In (1 diagrams)

- Logical: FinancialPartnershipService_v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditAmount | MoneyType |  |
| terms | int |  |
| annuity | MoneyType |  |
| firstDueDate | date |  |
| totalMonthlyPayment | MoneyType |  |
| downPayment | MoneyType |  |
| cashPayment | MoneyType |  |
| totalPaymentPerCredit | MoneyType |  |
| goodsPrice | MoneyType |  |
| reimbursementAmount | MoneyType |  |
| netLoanAmount | MoneyType |  |
| initialAmount | MoneyType |  |
| lastInstallmentDate | dateTime |  |
| chargedFees | ChargedFeeTypeItems |  |
| sumOfInterest | MoneyType |  |
| sumOfFees | MoneyType |  |
