---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1349331
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 AccountDebtInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 📝 Notes

Data object used to exchange information about debt  and next loan information on a contract/account.

## 🔗 Connections (3)

- ← Dependency: [[UpdateAccountDebtInfoRequest]]
- → Dependency: [[MoneyDto (Class 1349330)]]
- ← Dependency: [[REQ1.2_ change interface]]

## 📊 Appears In (4 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
- Custom: PAYM-2034 (CBL-4285) - Pairing time for payment made before due date - GUI modifications
- Logical: Debt Catalog Types
- Logical: DebtCatalogManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| contractNumber | string |  |
| creditLimit | MoneyDto |  |
| debtFeeAct | MoneyDto |  |
| debtFeeTotal | MoneyDto |  |
| debtInterestAct | MoneyDto |  |
| debtInterestTotal | MoneyDto |  |
| debtOhersTotal | MoneyDto |  |
| debtOthersAct | MoneyDto |  |
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
| payAmountLast | MoneyDto |  |
| payDateFirst | dateTime |  |
| payDateLast | dateTime |  |
| penaltiesPaidSum | MoneyDto |  |
| recordCreatedTimestamp | dateTime |  |
| prePayment | MoneyDto |  |
