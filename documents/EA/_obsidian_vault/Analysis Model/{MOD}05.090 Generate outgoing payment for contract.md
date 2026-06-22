---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights"
domain: "Analysis Model"
element_id: 1880958
diagrams: 14
connections: 30
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.090 Generate outgoing payment for contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Access Rights

## 📝 Notes

System executes this UC to generate payments for retailers (POS, CASH, SAI NDF) or clients (CASH). In case of CASH, clients can be disbursed by sending money to their bank account, possibly via bank counter of chosen payment provider (e.g. partner bank).
Use case is triggered by events occurred either within contract sign, or contract registration processes.
Finally, these types of payments are stored in the system as unpaid, waiting to next processing in payment orders. In case a salesroom of disbursed retailer is disabled for repayment, the payment is set to "blocked" status and cannot be processed until the salesroom be allowed to repayment.
For closed-end loan and SAI contract in case of payment for retailers, outside of payment per commodities, there are calculated and generated also special types of payment to correct clearing with retailer as:

	
- partner subventions
	
- service subventions

{MOD CBL-12140 PAYM-3532}
If GP BIND_PTR_TO_SUBV = 1, then these payment types (SVP) are used in generated payment orders together with related PTR payment via ptr2subvention table. Otherwise those payments are generated only for payments overview. 
{/MOD}


UC triggers OutgoingPaymentCreatedSE system event.

## 🔗 Connections (27)

- ← UseCase «include»: [[{MOD}05.701 Process DisbursementMessage]]
- ← UseCase «include»: [[{ADD}05.237 Process outgoing payment for ContractRegistrationOutPaySE]]
- ← UseCase «include»: [[05.236 Process outgoing payments for ContractPackageReceivedSE (UseCase 1683314)]]
- ← UseCase «include»: [[01.265 Receive contract package (UseCase 1759980)]]
- ← Dependency: [[{MOD}Sign contract finalization]]
- ← UseCase «include»: [[05.092 {MOD}Disburse outgoing payments manually]]
- → NoteLink: [[Use Case Model _ Outgoing payments (Boundary 1880992)]]
- → NoteLink: [[Use Case Model _ Outgoing payments]]
- → Dependency: [[{MOD}Get subvention amount]]
- → Dependency: [[{ADD}Get Buyback amount]]
- → Dependency: [[OutgoingPaymentNotification]]
- → Realisation: [[REQ4 - Change in the outgoing payment calculation]]
- → Dependency: [[Generate participated payment]]
- → Dependency: [[{ADD}Get service related subvention amount]]
- → Dependency: [[REQ#2 Generate outgoing payments for REL transactions]]
- → Dependency: [[{MOD}Generate outgoing payment for contract]]
- → UseCase: [[Commodity module (Actor 1880894)]]
- → Realisation: [[05.090 Generate outgoing payment]]
- → Dependency: [[Create zero PTR payment]]
- → Dependency: [[{MOD}Compute partner’s payment amount]]
- → Dependency «invokes»: [[{MOD}033 - Cash payment]]
- → Dependency «invokes»: [[{MOD}107 - Origination fee]]
- → Realisation: [[Req #4 - Changes in outgoing payment generation]]
- → Realisation: [[Generate payment to POS_Partner]]
- → Dependency: [[Compute cash loan disbursement amount]]
- → Realisation: [[REQ1 - Creating outgoing payments for cash loans and insurance]]
- → Dependency «invokes»: [[{MOD}Downpayment]]

## 📊 Appears In (14 diagrams)

- Custom: Access Rights
- Custom: CBL-3091 Cash payment deduction driven by a new parameter
- Custom: PAYM-1410 (CBL-3666) Standalone insurance
- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
- Custom: PAYM-1625 (CBL-4117) Outgoing Payment Disbursement for Telco Partners 
- Custom: PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK
- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- Logical: RabbitMQ messages - OutgoingPaymentNotification
- Use Case: Contract signing
- Use Case: Contract tracking
- Use Case: Generate and Cancel outgoing payments
- Use Case: Operations with an outgoing payments from the contract detail
- Use Case: Process DisbursementMessage
- Use Case: Process internal system events and notifications for outgoing payments
