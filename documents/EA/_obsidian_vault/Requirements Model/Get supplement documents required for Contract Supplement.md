---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28603 BRPH-1558 (CSI-3892) Qwarta Renewal Supplement Document OTP Signature"
domain: "Requirements Model"
element_id: 1878823
diagrams: 4
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Get supplement documents required for Contract Supplement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-28603 BRPH-1558 (CSI-3892) Qwarta Renewal Supplement Document OTP Signature

## 📝 Notes

This rule describes obtaining Generated supplement documents defined for a Contract Supplement request (not related to a Loan Service).
Generated supplement documents can be divided to categories by signature requirement:

	
- An agreement to service usage - always signed, document is always generated (ALWAYS_REQUIRED)
	
- A summary - sign not required; document is always generated (NOT_REQUIRED)

Notice: STILL_UNSIGNED is not supported here

Input:

	
- ContractSupplement
	
- {ADD CSI-3892 PH} otpId (optional) {/ADD}


Output:

	
- List of Supplement Document Type objects


Steps:

	
- Get List of Document Types involved in Supplement Document Type and its Signature Requirement where Supplement Document Required Moment = 'SRC' (Service Request Creation) 
and Supplement Document Type.Archived=0 from ContractSupplement -> Supplement 
{ADD CSI-3892 PH} and If otpId is provided in the input then Supplement Document Type.SIGNATURE_REQUIREMENT = ALWAYS_REQUIRED {/ADD}
	
- Return the List of Document Types and its Signature Requirement

## 🔗 Connections (3)

- ← Usage: [[13.206 Recreate Account Renewal Supplement documents]]
- ← Dependency: [[{DEL}13.205 Create contract supplement documents]]
- ← Dependency: [[{MOD}13.205 Create contract supplement documents v2]]

## 📊 Appears In (4 diagrams)

- Custom: One Level Requirement Hierarchy
- Use Case: Credit Limit Change via messaging - Use Case model
- Use Case: Transaction Supplement documents - Use case model 
- Use Case: Use DMS in 13.205 Create contract supplement documents
