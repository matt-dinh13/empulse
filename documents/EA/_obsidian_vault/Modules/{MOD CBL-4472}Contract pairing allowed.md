---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules"
domain: "Modules"
element_id: 1673224
diagrams: 5
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD CBL-4472}Contract pairing allowed

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules

## 📝 Notes

Input:

	
- Contract


Output:

	
- result (OK, WRONG_CONTRACT_STATE, NO_INSTALLMENTS)


System performs checks below. 
If all checks passed, returns result OK. 
{/ADD}

Contract status check:
The given contract is in one of the following statuses:

	
- signed
	
- active
	
- payoff
	
- finished
	
- written-off
	
- {ADD CBL-4472 PAYM-3105}sold (only for payment with bsl_inc_payment_request.payment_purpose = 'CONTRACT_SALE')


If fails, returns result WRONG_CONTRACT_STATE.

For CEL contract Installment schedule exists check:
If Contract.Contract Type = CEL, then the system calls InstallmentScheduleWS.getInstallmentSchedule(), passed is Contract.code, no dateFrom.
If returns no installments, returns result NO_INSTALLMENTS.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}05.380 Create incoming payment on local request]]
- ← Dependency: [[05.362 Recouple misposted payment on external request]]
- ← Dependency: [[05.361 Create incoming payment on external request (UseCase 1855364)]]

## 📊 Appears In (5 diagrams)

- Custom: Validation Rules
- Use Case: Creating incoming payment
- Use Case: Creating incoming payment on internal component request
- Use Case: Creation incoming payment on external request
- Use Case: Recouple misposted payment on external request
