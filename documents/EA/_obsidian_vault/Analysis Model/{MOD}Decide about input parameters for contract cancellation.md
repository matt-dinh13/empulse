---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules"
domain: "Analysis Model"
element_id: 1818743
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Decide about input parameters for contract cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules

## 📝 Notes

This element describes how system decides about particular parameters to be used on the input for contract cancellation.

Input:
- Contract being processed by the calling use case.
- Vector with evaluation result obtained from LAP.

Output:
- Contract - contract to be canceled.
- User - user, who initiated the contract cancellation.
- Reason - reason for contract cancellation.
- Note (optional) - additional note for contract cancellation entered by the user.

Steps:

	
- System sets Contract = contract from the input.
	
- System checks if the contract was canceled manually, i.e. browse the ApprovalProcessResult->Data.vector and searches for key-value structure where .Key = 'sourceData.reasonOfCancellation.employeeNumber'.
If found, system sets User = .Value from found structure, otherwise sets User = 'LAP'.
	
- System checks if the cancellation reason was obtained from LAP, i.e. browse the ApprovalProcessResult->Data.vector and searches for key-value structure where .Key = 'sourceData.reasonOfCancellation.reasonCode'.
     3.1.   If found, system checks whether the .Value from found structure is a known enumeration value, i.e. if string 'LAP_' + <.Value> matches any record from Contract_Status_Transitions_Reasons.Code where (Contract_Transition_Type = 'T' and Role_Type = 'SYSTEM'). If so, system sets Reason = 'LAP_' + <.Value>.
     3.2.   If nothing is found or the .Value from found structure is not a known enumeration value, system proceeds based on the previously processed 'sourceData.reasonOfCancellation.employeeNumber' item. If its .Value is not null, then system sets Reason = 'LAP_CANCEL_MANUAL', otherwise sets Reason = 'LAP_CANCEL'.
	
- If cancellation note was obtained from LAP (i.e. if a key-value structure where .Key = 'sourceData.reasonOfCancellation.comment' or outputData.onlineRBP.comment {ADD LOR-LOR-10369} or outputData.onlineRBP.commentBoD1 {/ADD } is found in ApprovalProcessResult->Data.vector), system sets Note = .Value from respective structure.
	
- System returns the output.

## 🔗 Connections (1)

- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: LOR-10369 Create new fullpath for storing notification from 1BoD
- Use Case: Receive evaluation results
