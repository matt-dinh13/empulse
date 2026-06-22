---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Cancel Contract/Business Rules"
domain: "Modules"
element_id: 1867044
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Check for active incoming payments (COMA)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Cancel Contract/Business Rules

## 📝 Notes

{ADD CLM-6038/}

Description: Goal of this rule is to check if there is any active incoming payment on contract. Its existence may lead to restriction of further operations on a contract.

Steps:

	
- System checks for the existence of an incoming payment via REST API call to an INP module's method getActivePaymentsByContractUsingGET else it falls back to checking in the database.
	
- If call to INP module fails, system responds with MSG_INCOMING_PAYMENTS_MODULE_ERROR error message ('Call to incoming payments module failed.').
	
- If INP module responds with at least one active incoming payment, then the rule returns TRUE else rule returns FALSE.

## 🔗 Connections (1)

- ← Usage: [[{ADD}Contract cancel via API (UseCase 1869937)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Contract cancellation
