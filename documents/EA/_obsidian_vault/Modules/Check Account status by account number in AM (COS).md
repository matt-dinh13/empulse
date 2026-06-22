---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1868226
diagrams: 7
connections: 8
tags:
  - requirement
  - modules
---

# 📋 Check Account status by account number in AM (COS)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Analytical Model/Use Case Model

## 📝 Notes

This rule describes how to evaluate Account info by its account number and related customer id from the AM
{DEL DOBA-292}Input:

	
- accountNumber{/DEL}


Output

	
- DEL DOBA-292}boolean value{/DEL}
	
- {ADD DOBA-292}ErrorMessageResponse{/ADD}
	
- Account



	
- {ADD DOBA-292}System gets AccountNumber from ContractService.Account Number.
	
- If AccountNumber doesn't exist, system returns HTTP 400 (Bad request) with error message of MISSING_ACCOUNT_ON_CONTRACT (e.g. "Account is not found on the Contract.") in the response and use case ends.
	
- If ContractService.Account Number exists,{/ADD} system call cabus-am GET https://am.<environment>/account/{AccountNumber}
	
- If system returns Account object, and if Account.status is in (CR, AC, PO), {DEL DOBA-292}TRUE is returned, else FALSE is returned{/DEL}
{ADD DOBA-292}- system returns Account object
- else system returns system returns HTTP 422 (Unprocessable Content) with error message of  OPERATION_FORBIDDEN_FOR_ACC_STATUS ('The Service operation is not allowed for the provided account') and use case ends.
	
- If an ERROR is returned from the call, or AM method is unavailable (timeout), {DEL DOBA-292}FALSE is returned{/DEL}{ADD DOBA-292}system returns HTTP 4xx/5xx with error message of the AM call error and use case ends.{/ADD}


Example of the call:
https://am.in00c1.in.infra/cabus-am/rest/openapi/v5/account/4300029983

## 🔗 Connections (8)

- ← Dependency: [[08.112 Deactivate Role on Contract Service (COS) (UseCase 1876296)]]
- ← Dependency: [[08.020 Activate Loan Service (COS) (UseCase 1876290)]]
- ← Dependency: [[08.040 Terminate Loan Service (COS) (UseCase 1876289)]]
- ← Dependency: [[08.030 Deactivate Loan Service method (COS) (UseCase 1876286)]]
- ← Dependency: [[08.010 Add Service to Loan (COS) (UseCase 1876285)]]
- ← Dependency: [[08.050 Cancel Loan Service method (COS) (UseCase 1876278)]]
- ← Dependency: [[08.110 Add Role to Contract Service (COS) (UseCase 1876277)]]
- ← Dependency: [[08.060 Replace Loan Service method (COS) (UseCase 1876274)]]

## 📊 Appears In (7 diagrams)

- Use Case: Activate Service on Contract - Use Case Model
- Use Case: Add Role to Contract Service - Use Case Model
- Use Case: Adding Service to Contract - Use Case Model
- Use Case: Cancel Loan Service - Use Case Model
- Use Case: Contract Service management
- Use Case: Deactivate Role on Contract Service - Use Case Model
- Use Case: Replace Loan Service - Use Case Model
