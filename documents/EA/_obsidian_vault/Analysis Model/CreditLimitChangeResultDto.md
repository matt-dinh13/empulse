---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)"
domain: "Analysis Model"
element_id: 1691080
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreditLimitChangeResultDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Account Notifications (REL)

## 📝 Notes

Credit limit change request for an account.

## 🔗 Connections (3)

- ← Dependency: [[CreditLimitChangeResultRequest]]
- → Dependency: [[AccountNumberType (Class 1159295)]]
- → Dependency: [[NotificationResultCodeDto (Enumeration 1691077)]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed messages - Credit limit change

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestId | TransactionSourceIdDto |  |
| errorMessage | string |  |
| creditLimit | PositiveMoneyDto |  |
| accountNumber | AccountNumberType |  |
| resultCode | NotificationResultCodeDto |  |
| minimalCreditLimit | PositiveMoneyDto |  |
