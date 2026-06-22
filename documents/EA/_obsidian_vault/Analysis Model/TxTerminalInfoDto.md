---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1819461
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 TxTerminalInfoDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Information about terminal where the card transaction was originated.

## 🔗 Connections (4)

- → Dependency: [[TerminalLocationTypeDto]]
- → Dependency: [[TerminalTypeDto]]
- → Dependency: [[TerminalOwnershipDto]]
- ← Dependency: [[TransactionDto]]

## 📊 Appears In (2 diagrams)

- Logical: AccountTransactionWS - usage on REL transaction confirmation
- Logical: AuthorizeTransactionWithIPVariant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| terminalID | string |  |
| cardAcceptorId | string |  |
| cardAcceptorName | string |  |
| cardAcceptorCity | string |  |
| cardAcceptorState | string |  |
| cardAcceptorZipCode | string |  |
| cardAcceptorCountryCode | string |  |
| MCC | string |  |
| ICA | string |  |
| IIN | string |  |
| type | TerminalTypeDto |  |
| locationType | TerminalLocationTypeDto |  |
| ownership | TerminalOwnershipDto |  |
