---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819466
diagrams: 5
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 TransactionDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 🔗 Connections (5)

- → Dependency: [[AttributesDto (Class 1611776)]]
- → Generalization «XSDextension»: [[BaseTransactionDto]]
- → Dependency: [[TxTerminalInfoDto]]
- ← Generalization «XSDextension»: [[{MOD}ConfirmationTxDto]]
- ← Generalization «XSDextension»: [[AuthorizationTxDto (Class 1819451)]]

## 📊 Appears In (5 diagrams)

- Logical: Account management structures
- Logical: Account management structures - Initial Transaction
- Logical: Account TransactionsWS - usage on REL transaction confirmation and IP conversion
- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: AuthorizeTransactionWithIPVariant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| paymentCardID | PaymentCardIdType |  |
| truncatedPan | TruncatedPan |  |
| terminal | TxTerminalInfoDto |  |
| serviceCode | ServiceCodeType |  |
| attributes | AttributesDto |  |
| chargeTransactionInPast | boolean |  |
