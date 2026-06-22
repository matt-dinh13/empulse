---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819468
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 AccountBalanceDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 🔗 Connections (1)

- → Generalization «XSDextension»: [[BalanceDto (Class 1819483)]]

## 📊 Appears In (2 diagrams)

- Logical: Account management structures
- Logical: AccountManagementWS - GetAccountBalance

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| amountDue | MoneyDto |  |
| instDueAmountNext | MoneyDto |  |
| instDueDateNext | date |  |
| debtFeeTotal | MoneyDto |  |
| debtInterestTotal | MoneyDto |  |
| debtPrincipalTotal | MoneyDto |  |
| debtPenaltyTotal | MoneyDto |  |
| overdraft | MoneyDto |  |
