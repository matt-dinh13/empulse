---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Access Rights"
domain: "Analysis Model"
element_id: 1671436
diagrams: 7
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.701 Process DisbursementMessage

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Access Rights

## 📝 Notes

Process a request for disbursement from internal system (currently CaBus AM). 
Creates an outgoing payment.

## 🔗 Connections (8)

- ← Dependency: [[REQ 1 Create API for outgoing payment order generating]]
- → Dependency: [[Generate outgoing payment for repeated disbursement]]
- → Dependency: [[Requirement1 (Requirement 1244576)]]
- → Realisation: [[05.701 Process DisbursementMessage]]
- → UseCase «include»: [[{MOD}05.090 Generate outgoing payment for contract]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- ← UseCase: [[CaBus-AM]]
- ← UseCase: [[BSL (Actor 1880871)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: PAYM-1613 - savingOfPaymentChannels
- Custom: PAYM-777 (CBL-2621) - Financing schemes IV - Subventions for REL
- Custom: PAYM-937 (CBL-2539) IN HCPAY - disbursement to dealers with subsidy
- Logical: Consumed JMS messages - DisbursementMessage
- Logical: RabbitMQ messages - OutgoingPaymentNotification
- Use Case: Process DisbursementMessage
