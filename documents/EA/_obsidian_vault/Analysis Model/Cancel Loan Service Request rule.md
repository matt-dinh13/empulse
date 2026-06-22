---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833418
diagrams: 5
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Cancel Loan Service Request rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes how to cancel a Loan Service Request and possibly related Contract Supplement.
Input:

	
- Loan Service Request (LSR)


	
- LSRCancellationReason


	
- SupplementReasonCode



	
- System performs validation whether the request is still in correct status (i.e. Loan Service Request.Current Status = CREATED). If the validation fails, a messages (MSG_LoanServiceIncorrectStatus; e.g. ) is returned and the scenario ends.
	
- If related Contract Supplement exists for the processed request (i.e. Loan Service Request.Used Supplement), the Contract Supplement is canceled by Change status of Contract Supplement rule with parameters: Used Supplement, newStatus = CANCELLED. reason = SupplementReasonCode
	
- System confirms cancellation of the request (i.e. LRS.Current Status = 'CANCELLED' and creates record in related Loan Service Request Status Transition entity with Reason = LSRCancellationReason.
	
- If Service.Block Bonus Services value exists (i.e. LSR -> Contract Service ->Service), and Block Bonus Services is in (BLOCK_EVALUATION, BLOCK_AND_TERMINATE), enable the bonus service evaluation by Pause bonus service evaluation rule with parameters: EvaluationPaused = FALSE, processed Contract Service
	
- System generates LoanServiceRequestCancelledSE system event with Contract and Loan Service Request as parameters

## 🔗 Connections (5)

- ← Dependency: [[08.925 Cancel expired loan service requests]]
- ← Dependency: [[08.360 Accept Loan Service Request Supplement document]]
- → Dependency: [[Change status of Contract Supplement]]
- ← Dependency: [[13.361 Cancel contract supplement automatically]]
- ← Dependency: [[08.357 Cancel request for loan service (UseCase 1879719)]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Use Case: Cancel contract supplement automatically
- Use Case: Cancellation of expired loan service requests
- Use Case: Collection tool requests management
- Use Case: Payment holiday request creation - externally
