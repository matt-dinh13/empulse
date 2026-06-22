---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Access Rights"
domain: "Analysis Model"
element_id: 1875873
diagrams: 11
connections: 17
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.310 Process disbursement confirmations

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Access Rights

## 📝 Notes

System calls this asynchronous use case to upload and processing disbursement confirmations from a file. 
System uploads the file from a directory chosen by user and performs formal and business validations on that.
Having a validation failed, system rejects the entire file and user who runs the action is noticed about the problem by receiving a message to the system inbox.
For each record of the file is validated provided contract existence, that entire amount is paid and matches 'Cash loan disbursement' payment type, and disbursement date validation.
If the record passes all validations, system performs for each presented contract following actions:

	
- If date of disbursement is provided, system confirms that the contract is disbursed (it means, it can be activated)


	
- If date of disbursement is not provided, system sets the contract as not disbursed (it means, the contract is suggested to cancellation)

Invalid records are noted to an error file and reported to user.

After processing of the file, user who starts this process is noticed about results by receiving a message to the system inbox.

## 🔗 Connections (16)

- ← Dependency: [[InstalmentPlanWS]]
- ← Dependency: [[InstalmentPlanWS (Interface 1283947)]]
- → Realisation: [[05.310 Process confirmations about payment receiving]]
- → Dependency: [[OutgoingPaymentNotification]]
- → Dependency: [[Set contract Condition Accepted]]
- → Realisation: [[REQ #1 - Confirmation of cash card transactions after disbursement is successful]]
- ← Dependency «invokes»: [[05.300 Import disbursement confirmations]]
- → Dependency: [[Structure of success message for disbursement confirmation]]
- → Dependency: [[Requirement1 (Boundary 1875882)]]
- → Dependency: [[Set Contract Condition Rejected]]
- → Dependency: [[Create business event]]
- → Realisation: [[REQ#9 Import refund delivery confirmation to system]]
- → Realisation: [[REQ#3 Contract business events - refactoring of existing use cases (from ContractModification)]]
- → UseCase «include»: [[{MOD}03.037 Deduct interest overcharge while shortening first interest period]]
- → Dependency: [[{MOD}Structure of message and error report for disbursement confirmations]]
- → Realisation: [[REQ#4 05.310 Process disbursement confirmations - take into account relationship to revolving transa]]

## 📊 Appears In (11 diagrams)

- Custom: Access Rights
- Custom: CBL-5151 (CLM-1871) Add ConditionAcceptedSE/RejectedSE to ContractFullInfo Notification
- Custom: PAYM-1180 (CBL-711) - Inc. pay. modularization - ANA/DEV synchro Sprint 20
- Logical: CreateInstalmentPlan
- Logical: CreateInstalmentPlan
- Logical: DisbursementConfirmationFile
- Logical: InstallmentPlanWS
- Logical: InstallmentPlanWS
- Logical: RabbitMQ messages - OutgoingPaymentNotification
- Use Case: Disbursement confirmations
- Use Case: OVERVIEW - Installment Schedule
