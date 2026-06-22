---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode"
domain: "Requirements Model"
element_id: 1878821
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Validate Transaction Supplement update request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode

## 📝 Notes

This rule presents a list of validations for a Transaction Supplement update request received from an external system.

List of validations in format [validation definition; behaviour (error message returned) if the validation fails]:
 

	
- transactionSupplementId - System checks if the ContractSupplement with Code= transactionSupplementId and Status is in (ACCEPTED, PAID) exists; NoTransactionSupplementExists ("Transaction supplement doesn't exists for the provide identifier.")
	
- system checks if the ContractSupplement has Loan Type = 'APOS'; OperationNotAllowedForLoanType ("Operation not allowed for this supplement type") -- refunding Transaction Supplement is only allowed for APOS loan type
	
- system gets originalTransactionId from ContractSupplement -> Sales Quote Applied-> Account Transaction.Data Exchange Id where Status = CONFIRMED; NoActiveAccountTransactionExists ("No active account transaction for refund exists")
	
- refundedAmount - the amount must be greater than 0 and lower or equal ContractSupplement -> Account Transaction.Amount Billing in CONFIRMED status; InvalidRefundedAmount ("Amount for refund is invalid.")
	
- customerCancellationDate (if a value exists) - the date must be between the ContractSupplement -> Contract Supplement Status Transation.Create Date for Status in (ACCEPTED) and the current date; InvalidCustomerCancelDate ("Invalid customer cancellation date.")
	
- partnerRefundRequestId (if a value exists) - system checks that partnerRefundRequestId doesn't exist in Transaction Change Request for ContractSupplement with Code = transactionSupplementId and Transaction Change Request.Status = PROCESSED; PartnerRequestDuplicity ("The Partner refund request with code ${partnerRefundRequestId} is already processed.")
	
- reasonDescription  (if a value exists) - system checks the value length isn't great than 255 characters; ReasonDescriptionLengthExceeded

## 🔗 Connections (1)

- ← Dependency: [[13.112 Refund Transaction Supplement]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode
- Use Case: Transaction Supplement refunding - Use case model
