---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819448
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 TransactionAuthorizationDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Authorization object.

## 🔗 Connections (6)

- ← Dependency: [[GetAuthorizationsResponse]]
- → Dependency: [[MoneyDto (Class 1638510)]]
- → Dependency: [[MoneyDto (Class 1638510)]]
- → Dependency: [[AttributesDto (Class 1611776)]]
- → Dependency: [[TransactionSourceIdDto (Class 1638513)]]
- → Dependency: [[TransactionDirectionDto (Enumeration 1223774)]]

## 📊 Appears In (2 diagrams)

- Logical: Account management structures
- Logical: AccountManagementWS - Authorization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| transactionSourceSystemId | TransactionSourceIdDto |  |
| transactionDate | date |  |
| transactionAmount | MoneyDto |  |
| holdAmount | MoneyDto |  |
| direction | TransactionDirectionDto |  |
| authorizationMode |  |  |
| transactionType | TransactionTypeDto |  |
| cardAcceptorName | string |  |
| cardAcceptorCity | string |  |
| cardAcceptorState | string |  |
| attributes | AttributesDto |  |
