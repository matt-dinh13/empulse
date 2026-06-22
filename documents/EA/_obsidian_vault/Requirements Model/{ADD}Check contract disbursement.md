---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11279 (CLM-3521) Updating External Bank information after contract signing in Consolidation tab"
domain: "Requirements Model"
element_id: 1817783
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Check contract disbursement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11279 (CLM-3521) Updating External Bank information after contract signing in Consolidation tab

## 📝 Notes

{ADD CLM-3521/}
This rule checks, if the contract was already disbursed.

Input:

	
- contract code


Output:

	
- True/False value


Steps:

	
- If Contract[.Contract_Code= contract code].Status = 'Signed' then system proceeds with next steps else the rule returns False and ends.
	
- System calls API method OutgoingPaymentsWS.getOutgoingPayment with parameters:
getOutgoingPaymentRequest.contractCode = contract code
	
- If the call fails then the rule returns error message MSG_OutgoingPaymentWS_Failed (e.g. Retrieval of outgoing payments failed).
If getOutgoingPaymentResponse.outgoingPayments.paymentType[.paymentType='CL'].exists then system proceeds with next steps else the rule returns False and ends.
	
- If getOutgoingPaymentResponse.outgoingPayments.paymentType[.paymentType='CL'].status = 'D' then rule returns True else the rule returns False.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.366 Update bank account for refinanced contract]]
- ← Dependency: [[01.365 Add bank account for refinanced contract (UseCase 1817767)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-11279 (CLM-3521) Updating External Bank information after contract signing in Consolidation tab
