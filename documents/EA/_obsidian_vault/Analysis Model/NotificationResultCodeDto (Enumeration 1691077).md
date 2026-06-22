---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)"
domain: "Analysis Model"
element_id: 1691077
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 NotificationResultCodeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)

## 📝 Notes

Result code of credit limit change processing

## 🔗 Connections (1)

- ← Dependency: [[CreditLimitChangeResultDto]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed messages - Credit limit change

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OK | string |  |
| ERROR | string |  |
| INVALID_CREDIT_LIMIT |  |  |
| ACCOUNT_IS_BLOCKED_DUE_TO_COLLECTION |  |  |
| ACCOUNT_IS_BLOCKED_BY_HC |  |  |
