---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI"
domain: "Analysis Model"
element_id: 1869669
diagrams: 7
connections: 17
tags:
  - interface
  - analysis-model
---

# 🔶 OutgoingPaymentRestAPI

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI

## 📝 Notes

{ADD CBL-11254 PAYM-3635}

REST API for external communcation with outgoing payments

## 🔗 Connections (17)

- → Dependency: [[{ADD}05.705 Get Outgoing Payment Amount via REST API]]
- → Dependency: [[05.113 Generate Outgoing Payment Order via REST API]]
- → Dependency: [[GetOutgoingPaymentRequest]]
- → Dependency: [[05.703 Get outgoing payments via REST API]]
- → Usage: [[{ADD}05.096 Cancel outgoing payment via REST API]]
- → Dependency: [[GetValidRecipientBankAccountRequest]]
- → Dependency: [[GetOutgoingPaymentRequest (Class 1869675)]]
- → Dependency: [[CancelOutgoingPaymentResponse]]
- → Dependency: [[GetOutgoingPaymentResponse (Class 1869676)]]
- → Dependency: [[GetOutgoingPaymentResponse]]
- → Dependency: [[05.099 Create outgoing payment via REST API]]
- → Dependency: [[CreateOutgoingPaymentRequest]]
- → Dependency: [[GetValidRecipientBankAccountResponse]]
- → Dependency: [[CancelOutgoingPaymentRequest (Class 1869663)]]
- → Dependency: [[GenerateOutgoingPaymentOrderResponse (Class 1869662)]]
- → Dependency: [[CreateOutgoingPaymentResponse]]
- → Dependency: [[GenerateOutgoingPaymentRequest]]

## 📊 Appears In (7 diagrams)

- Logical: OutgoingPaymentRestAPI
- Logical: OutgoingPaymentRestAPI - Cancel Outgoing Payment
- Logical: OutgoingPaymentRestAPI - Create Outgoing Payment
- Logical: OutgoingPaymentRestAPI - GenerateOutgoingPaymentOrder
- Logical: OutgoingPaymentRestAPI - Get Otgoing Payment Amount
- Logical: OutgoingPaymentRestAPI - Get Outgoing Payment
- Logical: OutgoingPaymentRestAPI - Get Valid Recipient Bank Account
