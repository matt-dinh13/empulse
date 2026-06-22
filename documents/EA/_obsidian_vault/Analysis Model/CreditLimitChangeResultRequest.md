---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)"
domain: "Analysis Model"
element_id: 1690994
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreditLimitChangeResultRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)

## 📝 Notes

The message notifies about a realized requests of credit limit changes on an account

## 🔗 Connections (3)

- → Dependency: [[CreditLimitChangeResultDto]]
- ← Usage: [[AccountNotificationNonBatchService]]
- ← Usage: [[AccountNotificationService]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed messages - Credit limit change

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditLimitResult | acc:CreditLimitChangeResultDto |  |
