---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Access Rights"
domain: "Analysis Model"
element_id: 1875871
diagrams: 7
connections: 15
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.350 Process disbursement confirmation message

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Access Rights

## 📝 Notes

This use case describes processing a message (currently via RMQ) with a DisbursementConfirmationRequest object received from an external system. 
This message informs that a payment has been delivered or not delivered within an external system (which has role "master of payments", i.e. a core banking system) and the BSL should take it into account. 

After the system receives DisbursementConfirmationRequest object, it performs necessary checks and updates outgoing payment accordingly:
 

	
- finds a corresponding outgoing payment
	
- checks if amount from message equals to amount of the found outgoing payment.
	
- checks whether the found outgoing payment is in state 'Paid'.
	
- A consequence of this condition is that once a payment was already confirmed by some message, any subsequent message for the payment will end with an error and status of the payment in the system will not be changed (this may happen if a payment is confirmed, but after some time, clearing house finds out that delivery to target bank account failed; see business process at the beginning of this BRR for reference).

If delivery status of message is DELIVERED, the system:

	
- transforms the payment to status 'Delivered' (new status, final state),
	
- stores additional attributes obtained from message to the outgoing payment: OBS paid date,OBS order number.
	
- If the outgoing payment represents Cash loan disbursement, the system allows activation of a corresponding contract.

If delivery status is NOT_DELIVERED (i.e. payment was rejected), the system:

	
- transforms the payment to status 'Not delivered' (new status, final state).

## 🔗 Connections (13)

- ← Dependency: [[InstalmentPlanWS]]
- ← Dependency: [[InstalmentPlanWS (Interface 1283947)]]
- → NoteLink: [[Use Case Model _ Processing disbursement confirmation message]]
- → Realisation: [[REQ #1 - Confirmation of cash card transactions after disbursement is successful]]
- → Realisation: [[REQ#2 Message STATEMENT240]]
- → Realisation: [[05.350 Process disbursement confirmation message]]
- → Dependency: [[Set Contract Condition Rejected]]
- → Dependency: [[Set contract Condition Accepted]]
- → Dependency: [[Create business event]]
- → Realisation: [[REQ#3 Contract business events - refactoring of existing use cases (from ContractModification)]]
- ← UseCase: [[CaBus-AM]]
- ← UseCase: [[Core Banking System]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification
- Logical: CreateInstalmentPlan
- Logical: CreateInstalmentPlan
- Logical: InstallmentPlanWS
- Logical: InstallmentPlanWS
- Use Case: Processing disbursement confirmation message
