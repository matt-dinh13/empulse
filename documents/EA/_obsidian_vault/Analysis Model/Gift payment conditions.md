---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Use Case"
domain: "Analysis Model"
element_id: 1558631
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Gift payment conditions

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/Use Case

## 📝 Notes

Description:
Rule is intended for evaluation of conditions for granting of Gift payment on selected contract. 

Input parameters:
- contract
- EnforceGPGranting - default value false, if true then payment discipline (DPD) criteria on evaluated contract and potential secondary contracts will be skipped during gift payment evaluation

Output parameters:
- result of checking (TRUE/FALSE)
- date of gift payment
- number of gift payments

Procedure:

	
- If Gift payment has been already granted for the contract (exists an active installment with recalculation reason 'GP') then return FALSE.
	
- If contract status is not Active (A) or Signed (N) then return FALSE.
	
- If owner of contract is not HC or a securitization investor (i.e. contract.Ownership.Type not in ['HC', 'TP_SEC']), then return FALSE.
	
- Find service of type gift payment adjusted to contract where ContractServiceStatus = ‘Active’.
	
- If not found then return FALSE.
	
- Read link to Payment Discipline Parameters and number of gift payments from parameters of service.
	
- Calculate date of gift payment by the rule Calculation of Gift payment date with parameters
- service
- number of gift payments
7.1 If date of gift payment not found then return FALSE.
	
- If EnforceGPGranting = false then evaluate payment discipline on contract by the rule Checking of payment discipline with parameters
- link to Payment Discipline Parameters
- contract
- reference date = date of gift payment
which returns
- result of checking of payment discipline (TRUE/FALSE)
- reason of fail
	
- If result of checking of payment discipline = FALSE then return FALSE.
	
- System calls rule Gift payment conditions - paid installments with following arguments:
Contract
{ADD CBL-11131}Date of gift payment{/ADD CBL-11131}
If result is False, system returns False and ends otherwise system continues by following step
	
- Return (TRUE, date of gift payment, number of gift payments).

## 🔗 Connections (4)

- → Dependency: [[Requirement3 - Extension of ownership validation in services processing]]
- → Dependency: [[Calculation of Gift payment date]]
- → Association: [[Enable to pass a due date of gift payment to GP processing and enforcing of GP granting]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]

## 📊 Appears In (1 diagrams)

- Use Case: Gift payment processing
