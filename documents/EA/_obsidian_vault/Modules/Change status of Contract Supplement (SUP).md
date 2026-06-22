---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules"
domain: "Modules"
element_id: 1870127
diagrams: 6
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Change status of Contract Supplement (SUP)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules

## 📝 Notes

This algorithm describes change the status of Contract Supplement including other impacts. 

Input:

	
- Contract Supplement object
	
- newStatus, i.e. value from ContractSupplementStatusType enumeration
	
- Reason (Optional)


Algorithm: 

	
- System changes Contract Supplement.Status = newStatus
	
- System creates new ContractSupplement->ContractSupplementStatusTransition with following parameters:
- CreatedBy = currently logged user
- CreationDate = current date and time
- Status = newStatus
- Reason = Reason
	
- System tries find ContractSupplement->Supplement->Supplement Process Setting where Status Type = newStatus
	
- System sets the value of ContractSupplement.CancellationTimeout on:
- null if the appropriate SupplementCancellationSetting has not been found
- ('current date and time' + Supplement Process Setting.CancellationTimeout otherwise
	
- System generates a system event based on newStatus as follow:
- Case IN_PROCESS - > ContractSupplementCreatedSE system event
- Case APPROVED -> ContractSupplementApprovedSE system event
- Case SIGNED -> ContractSupplementSignedSE system event
- Case ACCEPTED -> ContractSupplementAcceptedSE system event
- Case CANCELLED -> ContractSupplementCancelledSE system event
- Case REJECTED ->  ContractSupplementRejectedSE system event
	
- Return to the calling use case.

## 🔗 Connections (6)

- ← Usage: [[{ADD}13.065 Process transaction confirmation response]]
- ← Dependency: [[{ADD}13.025 Authorize transactions in Contract Supplement (UseCase 1874100)]]
- ← Dependency: [[13.040 Accept Contract Supplement Documents]]
- ← Dependency: [[13.030 Create Document to Contract Supplement]]
- ← Dependency: [[13.055 Cancel Contract Supplement automatically]]
- ← Dependency: [[13.050 Cancel Contract Supplement]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Use Case: Accept Contract Supplement Documents - Use Case Model
- Use Case: Authorize Contract Supplement Transactions - Use Case Model
- Use Case: Cancel Contract Supplement - Use case model
- Use Case: Confirm Contract Supplement transactions - Use Case Model
- Use Case: Create Contract Supplement documents - Use Case Model
