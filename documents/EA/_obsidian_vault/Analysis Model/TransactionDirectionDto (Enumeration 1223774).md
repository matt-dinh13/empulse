---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1223774
diagrams: 3
connections: 3
tags:
  - enumeration
  - analysis-model
---

# 📝 TransactionDirectionDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Transaction direction - if the transaction amount should be added (CREDIT) or subtracted(DEBIT) from account. It doesn't cover fees
                direction.

## 🔗 Connections (3)

- ← Dependency: [[AccruedInterestMessageDto]]
- ← Dependency «use»: [[TransactionMessageDto (Class 1347890)]]
- ← Dependency: [[TransactionAuthorizationDto]]

## 📊 Appears In (3 diagrams)

- Logical: AccountManagementWS - Authorization
- Logical: Accured Interest -  JMS messages
- Logical: REL Account Transactions - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DEBIT | string |  |
| CREDIT | string |  |
| IRRELEVANT | string |  |
