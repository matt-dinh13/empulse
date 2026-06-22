---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Business rules"
domain: "Analysis Model"
element_id: 1879305
diagrams: 18
connections: 19
tags:
  - requirement
  - analysis-model
---

# 📋 Change status of Contract Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Business rules

## 📝 Notes

This algorithm performs change the status of contract supplement including other impacts. 

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
	
- System creates record in the Contract Supplement Event Outbox for KAFKA streaming based on Contract Supplement.Type and defined event

## 🔗 Connections (19)

- ← Dependency: [[13.450 Process supplement approval result (UseCase 1865654)]]
- ← Dependency: [[{MOD}08.358 Create request for payment holiday common]]
- ← Dependency: [[Cancel Loan Service Request rule]]
- ← Dependency: [[{MOD}08.064 Create request for change due date common]]
- ← Dependency: [[{MOD}13.360 Cancel unprocessed contract supplement manually]]
- ← Dependency: [[{ADD}13.076 Accept credit limit change documents (UseCase 1877207)]]
- ← Dependency: [[{ADD}13.074 Prepare credit limit change documents (UseCase 1877203)]]
- ← Dependency: [[13.052 Process account notification for credit limit change (UseCase 1877198)]]
- ← Dependency: [[13.060 Create change credit limit request manually (UseCase 1877196)]]
- ← Dependency: [[{MOD}13.114 Process transaction cancellation request]]
- ← Dependency: [[13.108 Accept Transaction Supplement documents]]
- ← Dependency: [[13.104 Cancel Transaction Supplement service]]
- ← Dependency: [[13.300 Process AM EventInfo notification]]
- ← Dependency: [[13.118 Authorize transactions in Transaction Supplement (UseCase 1881427)]]
- ← Dependency: [[{MOD}13.100 Create Transaction Supplement service]]
- ← Dependency: [[13.102 Prepare Transaction Supplement documents]]
- ← Dependency: [[13.124 Reject Transaction supplement service]]
- ← Dependency: [[{MOD}13.110 Process account transaction for Transaction Supplement]]
- ← Dependency: [[{ADD}13.601 Process contract service replacement notification]]

## 📊 Appears In (18 diagrams)

- Custom: Business rules
- Use Case: Card Balance Transfer request processing - Use Case Model
- Use Case: Change credit limit manually
- Use Case: CHDDR request creation - externally
- Use Case: CHDDR request creation - via GUI
- Use Case: Collection tool requests management
- Use Case: Contract service replacement request processing
- Use Case: Credit Limit Change via messaging - Use Case model
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
- Use Case: Transaction Supplement - Account notification processing - Use case model
- Use Case: Transaction Supplement authorization method
- Use Case: Transaction Supplement authorization/confirmation - Use case model
- Use Case: Transaction Supplement documents - Use case model 
- Use Case: Transaction Supplement refunding - Use case model
- Use Case: Transaction Supplement rejection - Use case model
- Use Case: Transaction Supplement request creation - Use case model
- Use Case: Transaction Supplement user interface
