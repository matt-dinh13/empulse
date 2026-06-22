---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Consumed/RabbitMQ/Debt catalogue/v4.0/AccountBalanceChangeRequest"
domain: "Modules"
element_id: 1802348
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 AccountBalanceChangeDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Consumed/RabbitMQ/Debt catalogue/v4.0/AccountBalanceChangeRequest

## 📝 Notes

Data object used to exchange information about debt  and next loan information on a contract/account.

## 🔗 Connections (3)

- → Dependency: [[MoneyDto (Class 1802347)]]
- ← Dependency: [[{ADD}AccountBalanceChangeRequest]]
- → Dependency: [[ContractTypeDto (Enumeration 1802345)]]

## 📊 Appears In (1 diagrams)

- Logical: {ADD}AccountBalanceChangeRequest

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
| prePayment | MoneyDto |  |
| businessDate | date |  |
| nextPrincipal | MoneyDto |  |
| nextInterest | MoneyDto |  |
| nextPenalty | MoneyDto |  |
| nextRegularFee | MoneyDto |  |
| nextFee | MoneyDto |  |
