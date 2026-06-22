---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/Account Balance Change/v6"
domain: "Modules"
element_id: 1848230
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 AccountBalanceChangeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/Account Balance Change/v6

## 📝 Notes

Data object used to exchange information about debt  and next loan information on a contract/account.

## 🔗 Connections (3)

- → Dependency: [[MoneyDto (Class 1848222)]]
- → Dependency: [[ContractTypeDto (Enumeration 1848221)]]
- ← Dependency: [[AccountBalanceChangeRequest (Class 1848229)]]

## 📊 Appears In (1 diagrams)

- Logical: Account Balance Change v6

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
| outerDebtFeeAct | MoneyDto |  |
| outerDebtFeeTotal | MoneyDto |  |
| outerDebtInterestAct | MoneyDto |  |
| outerDebtInterestTotal | MoneyDto |  |
| outerDebtPenaltyAct | MoneyDto |  |
| outerDebtPenaltyTotal | MoneyDto |  |
| outerDebtPrincipalAct | MoneyDto |  |
| {ADD}firstOverdueInstWithoutTolerance | date |  |
