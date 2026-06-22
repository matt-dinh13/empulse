---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660354
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 AccountBalanceDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[BalanceDto (Class 1660364)]]
- ← Dependency: [[GetAccountBalanceResponse (Class 1698926)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - GetAccountBalance

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
| availableCashBalance | MoneyDto |  |
