---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1638513
diagrams: 15
connections: 16
tags:
  - class
  - analysis-model
---

# 🔷 TransactionSourceIdDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Transaction identification in the source system where the card transaction was originated.

## 🔗 Connections (16)

- ← Dependency: [[TransactionNotificationDto]]
- ← Dependency: [[DisbursementMessageDto]]
- ← Dependency: [[InterestDetailDto]]
- ← Dependency: [[BasicAccountItemDto]]
- ← Dependency: [[CancelEventRequest]]
- ← Dependency: [[CancelAuthorizationRequest]]
- ← Dependency: [[CancelTransactionRequest]]
- ← Dependency: [[CancelAccountItemRequest]]
- ← Dependency: [[DisbursementConfirmationDto]]
- ← Dependency: [[DisbursementDenialDto]]
- → Association: [[TransactionSourceCodeType (Class 1638517)]]
- → Dependency: [[SourceSystemEnumDto (Enumeration 1638514)]]
- ← Dependency: [[BaseTransactionDto]]
- ← Dependency «use»: [[FeeDto (Class 1819488)]]
- ← Dependency: [[CreditLimitChangeRequestDto]]
- ← Dependency: [[TransactionAuthorizationDto]]

## 📊 Appears In (15 diagrams)

- Logical: Account management structures
- Logical: Account management structures - Initial Transaction
- Logical: Account TransactionsWS - charge/cancel fee
- Logical: Account TransactionsWS - usage on REL transaction confirmation and IP conversion
- Logical: Account UI - Interface diagram - Installment schedule
- Logical: Account UI - Interface diagram - Transactions
- Logical: AccountManagementWS - Authorization
- Logical: AccountManagementWS - Credit limit change request
- Logical: AccountNotificationWS - Transactions
- Logical: AccountTransactions - usage at transaction cancellation
- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: AuthorizeTransactionWithIPVariant
- Logical: COMMON for Cabus
- Logical: Consumed JMS messages - DisbursementMessage
- Logical: Disbursement result messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceSystem | SourceSystemEnumDto |  |
| sourceTxId | TransactionSourceCodeType |  |
