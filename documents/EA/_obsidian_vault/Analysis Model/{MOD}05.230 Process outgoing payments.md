---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights"
domain: "Analysis Model"
element_id: 1880957
diagrams: 4
connections: 17
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.230 Process outgoing payments

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights

## 📝 Notes

Use case is called as asynchronous job to process set of outgoing payments and creates outgoing payment orders grouped in a outgoing payment file.
First, system groups the payments by recipient bank accounts and for each recipient creates a payment order.
Next, all created payment orders are placed into an outgoing payment file. The file is placed into predefined directory of a file storage.
{DEL PAYM-2821 CBL-8434}For each payment order are subsequently created printouts of dispatch notes (see 05.120 Generate dispatch notes use case). These dispatch notes are stored into the predefined directory.{/DEL}
Having all payments processed and result notification should not be skipped, see input parameters, user who has run the action is noticed by a message.

## 🔗 Connections (17)

- ← Dependency: [[05.113 Generate Outgoing Payment Order via REST API]]
- ← Dependency: [[{ADD}Process SAI outgoing payments after disbursement confirmation]]
- → Dependency: [[{MOD}Settle payments collected on POS with payment order]]
- → UseCase «include»: [[05.120 Generate dispatch notes (UseCase 867417)]]
- → Dependency «invokes»: [[{MOD}115 - Contract disbursement]]
- → Realisation: [[REQ3 - Payment order file structure]]
- → Dependency: [[{MOD}Update recipient bank data for outgoing payments]]
- → Realisation: [[REQ#1 Message ORDERPAY140]]
- → Realisation: [[REQ#1 Disable of generation payment order file on KZ environment]]
- → Realisation: [[Requirement3 - Generate outgoing payment orders with settlements]]
- → Dependency: [[{MOD}Generate payment orders from outgoing payments]]
- → Realisation: [[REQ#1 - New business event _Contract has been disbursed_]]
- ← Dependency «invokes»: [[05.112 Generate payment orders on external request]]
- ← Dependency «invokes»: [[{MOD}05.111 Generate outgoing payment orders automatically]]
- → Dependency: [[Generate outgoing payments file]]
- → Realisation: [[05.230 Process outgoing payments]]
- ← UseCase «invoke»: [[{MOD}05.110 Generate payment orders]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
- Logical: OutgoingPaymentRestAPI
- Use Case: Process outgoing payments
