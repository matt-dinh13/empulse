---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/Business rules"
domain: "Analysis Model"
element_id: 1862173
diagrams: 5
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Set Contract Supplement registration status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement registration/Business rules

## 📝 Notes

This algorithm describes a rule for setting contract supplement registration status.

Input parameters:

	
- ContractSupplement
	
- RegistrationStatus


Steps:
1. Update Contract Supplement.Registration Status (the Supplement history stays unchanged):

	
- Registration Status = RegistrationStatus


2. Create a new record in Contract Supplement Registration Status Transition:

	
- Created By = the current user
	
- Creation Date = the current date and time
	
- Status = RegistrationStatus

## 🔗 Connections (3)

- ← Dependency: [[13.270 Register Contract supplement]]
- ← Dependency: [[{DEL}13.205 Create contract supplement documents]]
- ← Dependency: [[{MOD}13.205 Create contract supplement documents v2]]

## 📊 Appears In (5 diagrams)

- Custom: Business rules
- Use Case: CHDDR request creation - via GUI
- Use Case: Contract supplement registration
- Use Case: Payment holiday request creation - via GUI
- Use Case: Use DMS in 13.205 Create contract supplement documents
