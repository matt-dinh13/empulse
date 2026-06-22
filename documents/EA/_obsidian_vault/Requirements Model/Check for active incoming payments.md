---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18085 (CLM-4954) Cancel contract - Validate INC PAY via REST API"
domain: "Requirements Model"
element_id: 1835783
diagrams: 4
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 Check for active incoming payments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-18085 (CLM-4954) Cancel contract - Validate INC PAY via REST API

## 📝 Notes

{ADD CLM-4953/}

Description: Goal of this rule is to check if there is any active incoming payment on contract. Its existence may lead to restriction of further operations on a contract.

Steps:

	
- System checks for the existence of an incoming payment via REST API call to an INP module's method getActivePaymentsByContractUsingGET else it falls back to checking in the database.
	
- If call to INP module fails, system responds with MSG_INCOMING_PAYMENTS_MODULE_ERROR error message ('Call to incoming payments module failed.').
	
- If INP module responds with at least one active incoming payment, then the rule returns TRUE and system shows a message (MSG_0394).
	
- Rule returns FALSE.

## 🔗 Connections (5)

- ← Dependency: [[01.333 Cancel active contract service]]
- ← Dependency: [[01.590 Cancel active contract manually (UseCase 1850510)]]
- ← Dependency: [[01.592 Cancel paid-off contract manually (UseCase 1850504)]]
- ← Dependency: [[01.332 Cancel signed contract service (UseCase 1850503)]]
- ← Dependency: [[01.330 Cancel signed contract manually (UseCase 1850502)]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-18085 (CLM-4954) Cancel contract - Validate INC PAY via REST API
- Custom: Common for contract cancellation
- Use Case: Cancel contract after sign
- Use Case: Cancel contract manually
