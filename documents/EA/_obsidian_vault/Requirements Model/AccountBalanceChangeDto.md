---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1691082
diagrams: 5
connections: 35
tags:
  - class
  - requirements-model
---

# 🔷 AccountBalanceChangeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 📝 Notes

Data object used to exchange information about debt  and next loan information on a contract/account.

## 🔗 Connections (35)

- ← Dependency: [[AccountBalanceChangeRequest]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Usage: [[Debt Catalogue]]
- → Dependency: [[ContractTypeDto]]

## 📊 Appears In (5 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
- Custom: PAYM-2067 (CBL-4666) Optimization of AccountBalanceChange message in late EOM processing
- Logical: Account balance change
- Logical: Consumed messages - REL Account balance change
- Logical: Mapping of AccountBalanceChange to Debt Catalog

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
