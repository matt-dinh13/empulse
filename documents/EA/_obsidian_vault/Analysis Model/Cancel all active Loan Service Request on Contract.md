---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833432
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Cancel all active Loan Service Request on Contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes termination all active Loan Service Requests for provided Contract.

Input parameters

	
- Contract


Steps:

	
- System search for the Loan Service Request having Current Status = 'CREATED' {ADD TID-6126}and Request Type != CHECKTL{/ADD} {ADD-CLM-2478} and Request Type != CELREW{/ADD}and related to the processed Contract


	
- System cancels the found Loan Service Requests:
- Current Status = 'CANCELLED'; and creates respective record in related Loan Service Request Status Transition entity
- System generates LoanServiceRequestCancelledSE system event with Contract and Loan Service Request as parameters

## 🔗 Connections (1)

- ← Dependency: [[01.380 Prepare Contract for Consolidation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Loan consolidation - use case model
