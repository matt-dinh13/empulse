---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/REL Account renewal support/Use Case Model"
domain: "Analysis Model"
element_id: 1806031
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Validate Account Renewal request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/REL Account renewal support/Use Case Model

## 📝 Notes

{ADD CLM-5608 /}
This rule describes a list of validations for Account Renewal Supplement request
 

	
- contractNumber - check if the client has the provided Contract with contract status in (N, A) and Contract Type = 'REL' and Contract Account = contractNumber ; a message is written (INVALID_CONTRACT; e.g. Contract with code: ${contract_code} is not valid for the request.)
	
- Unprocessed requests for the Contract status change - check if no unprocessed request for Contract status change request exists by Contract Status Transition Request Check; (CONTRACT_STATUS_CHANGE_REQUIRED; e.g. An unprocessed request for contract status change exists.)
	
- Account Renewal Supplement duplicity - check if an unprocessed request for Account Renewal Supplement request exists (search for Contract Supplement having type = 'ACCOUNT_RENEWAL' and Status in ( IN_PROCESS, APPROVED); a message is written (ACCOUNT_RENEWAL_DUPLICITY; e.g. An unprocessed request for the account renewal exists.)

## 🔗 Connections (1)

- ← Dependency: [[13.200 Create Account Renewal Supplement]]

## 📊 Appears In (1 diagrams)

- Use Case: REL Account renewal support - Use Case Model
