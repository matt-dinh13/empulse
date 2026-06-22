---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process incoming payment message/Access Right"
domain: "Modules"
element_id: 1673360
diagrams: 2
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 TODO 05.400 Process incoming payment message

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process incoming payment message/Access Right

## 📝 Notes

This use case describes processing a message (currently via JMS) with a IncomingPaymentRequest object received from an external system. 
This message informs that a payment has been created or canceled within an external system (which has role "master of payments", i.e. a core banking system) and the BSL should take it into account. 

The system only stores the data into specific table for further processing (ensured by UC 05.183 Process batch of incoming payment processing requests).

## 🔗 Connections (6)

- → Realisation: [[REQ#3 Reflect source system and new types of incoming payments in communication with CaBus]]
- → Dependency: [[REQ#1 Message PAYIN220 (closed-end loan and revolving loan)]]
- → Realisation: [[05.400 Process Set incoming payment message]]
- → Realisation: [[REQ#1 Add source system to IncomingPayment and remove idPaymentCanceled from IncomingPaymentRequest]]
- → Dependency: [[Perform incoming payment cancellation]]
- ← UseCase: [[System (Actor 1877517)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Processing incoming payments message
