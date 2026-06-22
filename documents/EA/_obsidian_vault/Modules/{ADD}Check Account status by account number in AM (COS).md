---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1850030
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {ADD}Check Account status by account number in AM (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Use Case Model

## 📝 Notes

{ADD CSI-2970 /}
This rule describes how to get Account info by its account number and related customer id from the AM
Input:

	
- accountNumber


Output

	
- boolean value
	
- Account



	
- System call cabus-am GET https://am.<environment>/account/{accountNumber}
	
- If system returns Account object, and if Account.status is in (AC, PO), TRUE is returned, else FALSE is returned
	
- If an ERROR is returned, or AM method is unavailable (timeout), FALSE is returned


Example of the call:
https://am.in00c1.in.infra/cabus-am/rest/openapi/v5/account/4300029983

## 🔗 Connections (4)

- ← Dependency: [[{MOD}08.060 Replace Loan Service method (COS)]]
- ← Dependency: [[{MOD}08.010 Add Service to Loan (COS)]]
- ← Dependency: [[08.020 Activate Loan Service (COS) (UseCase 1872528)]]
- ← Dependency: [[08.030 Deactivate Loan Service method (COS) (UseCase 1872518)]]

## 📊 Appears In (3 diagrams)

- Use Case: Activate Service on Contract - Use Case Model
- Use Case: Adding Service to Contract - Use Case Model
- Use Case: Replace Loan Service - Use Case Model
