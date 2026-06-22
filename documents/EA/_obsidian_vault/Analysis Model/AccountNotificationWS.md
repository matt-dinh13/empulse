---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications"
domain: "Analysis Model"
element_id: 1305550
diagrams: 4
connections: 12
tags:
  - interface
  - analysis-model
---

# 🔶 AccountNotificationWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payment Card system/Account notifications

## 📝 Notes

An interface to receiving results of payment processing requests on revolving account in an external system (CaBus). Implemented as JMS.

## 🔗 Connections (11)

- → Dependency «use»: [[FirstTransactionNotificationResponse]]
- → Dependency: [[ProcessPairedPaymentRequest]]
- → Dependency: [[ProcessAccountClosureResultResponse]]
- → Dependency «use»: [[{ADD}ProcessServiceOperationNotificationResponse]]
- → Dependency: [[ProcessAccountClosureResultRequest]]
- → Dependency: [[ProcessUnpairedPaymentResponse]]
- → Dependency «use»: [[FirstTransactionNotificationRequest]]
- → Dependency: [[ProcessUnpairedPaymentRequest]]
- → Dependency «use»: [[{ADD}ProcessServiceOperationNotificationRequest]]
- → Dependency «trace»: [[01.770 Process account transaction notification (UseCase 1875616)]]
- → Dependency: [[ProcessPairedPaymentResponse]]

## 📊 Appears In (4 diagrams)

- Logical: AccountNotificationsWS - Service operation notification
- Logical: AccountNotificationWS - Account closure
- Logical: AccountNotificationWS - Incoming payment processing
- Logical: AccountNotificationWS - Transactions
