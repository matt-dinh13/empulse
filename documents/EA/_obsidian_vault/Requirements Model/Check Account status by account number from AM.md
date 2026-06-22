---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service"
domain: "Requirements Model"
element_id: 1833430
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Check Account status by account number from AM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service

## 📝 Notes

{ADD CSI-2445 /}
This rule describes how to get Account info by its account number and related customer id from the AM
Input:

	
- accountNumber


Output

	
- boolean value



	
- System call cabus-am GET .../account/{accountNumber}
	
- If system returns Account object, and Account.status is in (AC, PO), TRUE is returned, else FALSE is returned
	
- If an ERROR is returned, or AM method is unavailable (timeout), FALSE is returned


Example of the call:
https://am.in00c1.in.infra/cabus-am/rest/openapi/v5/account/4300029983

## 🔗 Connections (2)

- ← Dependency: [[Contract Service replacement validation]]
- ← Dependency: [[{MOD}01.774 Create Contract Service]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-19520 (CSI-2290) Apply feature [Replace service] in Bulk assignment for Payment Service
- Use Case: Contract Service replacement (flip)
- Use Case: Loan Service - Add a Service to Contract
