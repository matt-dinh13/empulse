---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment"
domain: "Requirements Model"
element_id: 1835781
diagrams: 5
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Cancellation after disbursement check

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment

## 📝 Notes

This rule describes several checks that are performed during cancellation of contract. The rule returns 'TRUE' or 'FALSE' according to passed validations.

Steps:

	
- If Contract.Contract_type = 'CEL' or 'SAI' and exists an OutgoingPayment.status in ('Paid', 'Delivered'), system displays a confirmation dialog (MSG_ContractCancelAfterDisbursement) informing the user about a disbursed contract. If the user confirms, system continues with the next check. Otherwise, this rule returns 'FALSE'.
	
- If Contract.Contract_type = 'REL' and Contract.Account_number <> NULL, system calls the AccountManagementWS interface (method GetAccountItems) with GetAccountItemsRequest.criteria.direction = 'D' and isCancelled = 'FALSE'. If no response is obtained (due to timeout or other error in the communication), system continues with the next step. Otherwise, system checks the result: If there is no record returned (i.e. GetAccountItemsResponse.items is empty), system continues with the next step. Otherwise, system displays a confirmation dialog (MSG_ContractCancelTransaction) informing the user about existing transactions. If the user confirms, system continues system continues with the next step. Otherwise, this rule returns 'FALSE'.
	
- This rule returns 'TRUE'.

## 🔗 Connections (3)

- ← Dependency: [[01.330 Cancel signed contract manually (UseCase 1850502)]]
- ← Dependency: [[01.590 Cancel active contract manually (UseCase 1850510)]]
- ← Dependency: [[01.592 Cancel paid-off contract manually (UseCase 1850504)]]

## 📊 Appears In (5 diagrams)

- Custom: CLM-3826 - New SAI - Contract cancellation
- Custom: Common for contract cancellation
- Custom: PAYM-1410 (CBL-3666) Standalone insurance
- Use Case: Cancel contract after sign
- Use Case: Cancel contract manually
