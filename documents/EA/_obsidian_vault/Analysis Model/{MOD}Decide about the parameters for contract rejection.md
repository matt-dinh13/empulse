---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules"
domain: "Analysis Model"
element_id: 1818740
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Decide about the parameters for contract rejection

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules

## 📝 Notes

This element describes how system decides about particular parameters to be used on the input for contract rejection.

Input:
- Vector with evaluation result obtained from LAP.

Output:
- Rejection Reason - reason for contract rejection.
- Note  - additional note for contract rejection (optional)

Steps:

	
- System checks if the communicated rejection reason (for any evaluation phase) was obtained from LAP, i.e. browse the ApprovalProcessResult->Data.vector and searches for respective key-value structures where .Key LIKE '%Result.rejectReasonClient'. The particular structures are searched in following order (order based on the evaluation phase starting with the latest one):

- ceResult.rejectReasonClient
- hvResult.rejectReasonClient
- postResult.rejectReasonClient
- preResult.rejectReasonClient
- prelim2Result.rejectReasonClient
- prelimRegisterResult.rejectReasonClient
- prelim1Result.rejectReasonClient

Once any of these keys is found, searching ends and the respective .Value is processed according the next step. If none of the keys is found, system sets Rejection Reason = 'LAP_REJECTED' and algorithm ends.
	
- System checks if the found communicated rejection reason is a known enumeration value, i.e. checks if .Value from found structure matches any record from Contract_Status_Transitions_Reasons.Code. If so, system sets Rejection Reason = <.Value>, otherwise sets Rejection Reason = 'LAP_REJECTED' .
	
- If the vector contains a note(Value of ApprovalProcessResult->Data.Key=outputData.onlineRBP.comment {ADD LOR-LOR-10369} or outputData.onlineRBP.commentBoD1 {/ADD }), system sets it to Note.

## 🔗 Connections (1)

- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: LOR-10369 Create new fullpath for storing notification from 1BoD
- Use Case: Receive evaluation results
