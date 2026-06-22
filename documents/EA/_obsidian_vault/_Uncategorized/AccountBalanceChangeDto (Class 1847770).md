---
type: Class
stereotype: "XSDcomplexType"
package: ""
domain: "_Uncategorized"
element_id: 1847770
diagrams: 0
connections: 0
tags:
  - class
  - _uncategorized
---

# 🔷 AccountBalanceChangeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: N/A

## 📝 Notes

Data object used to exchange information about debt  and next loan information on a contract/account.

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| debtPenaltyAct | MoneyDto |  |
| changeReason | string |  |
| accountNumber | string |  |
| availableBalance | MoneyDto |  |
| contractNumber | string |  |
| contractType | ContractTypeDto |  |
| creditLimit | MoneyDto |  |
| debtFeeAct | MoneyDto |  |
| debtFeeTotal | MoneyDto |  |
| debtInterestAct | MoneyDto |  |
| debtInterestTotal | MoneyDto |  |
| debtOthersAct | MoneyDto |  |
| debtOthersTotal | MoneyDto |  |
| debtPenaltyTotal | MoneyDto |  |
| debtPrincipalAct | MoneyDto |  |
| debtPrincipalTotal | MoneyDto |  |
| incomingPaymentsSum | MoneyDto |  |
| instDueAmountNext | MoneyDto |  |
| instDueDateFirst | date |  |
| instDueDateLast | date |  |
| instDueDateNext | date |  |
| instNumberDueLast | int |  |
| instOverdueCount | int |  |
| payableCollServiceFeeAmount | MoneyDto |  |
| payAmountLast | MoneyDto |  |
| payDateFirst | dateTime |  |
| payDateLast | dateTime |  |
| penaltiesPaidSum | MoneyDto |  |
| recordCreatedTimestamp | dateTime |  |
| minimumPayment | MoneyDto |  |
| cashLimit | MoneyDto |  |
| availableCreditLimit | MoneyDto |  |
| availableCashLimit | MoneyDto |  |
| creditCardBlockTypeCode | string |  |
| creditCardBlockReasonCode | string |  |
| endingBalance | MoneyDto |  |
| {ADD}prePayment | MoneyDto |  |
| {ADD}businessDate | date |  |
| {ADD}nextPrincipal | MoneyDto |  |
| {ADD}nextInterest | MoneyDto |  |
| {ADD}nextPenalty | MoneyDto |  |
| {ADD}nextRegularFee | MoneyDto |  |
| {ADD}nextFee | MoneyDto |  |
| {ADD}outerDebtFeeAct | MoneyDto |  |
| {ADD}outerDebtFeeTotal | MoneyDto |  |
| {ADD}outerDebtInterestAct | MoneyDto |  |
| {ADD}outerDebtInterestTotal | MoneyDto |  |
| {ADD}outerDebtPenaltyAct | MoneyDto |  |
| {ADD}outerDebtPenaltyTotal | MoneyDto |  |
| {ADD}outerDebtPrincipalAct | MoneyDto |  |
