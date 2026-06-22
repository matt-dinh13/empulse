---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case"
domain: "Analysis Model"
element_id: 1544236
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Grace period conditions

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case

## 📝 Notes

Description:
Rule is intended for evaluation of conditions for granting of grace period on selected contract. 

Input parameters:
- ContractService - reference to selected service of type Grace period
contract = ContractService.Contract
service = ContractService.Service (referenced version of Service)

Output parameters:
- result of checking (TRUE/FALSE)
- repayment date for grace period
- last due date of Grace period
- premium interest rate
- link to Payment Discipline Parameters

Procedure:

	
- If Contract.Contract Service has Status = ACTIVE and Evaluation Paused = TRUE and Service Type = GRPER then return FALSE
	
- If Grace period has been already granted for the contract (exists an active installment with recalculation reason 'GR') then return FALSE.
	
- If contract status is not Active (A) or Signed (N) then return FALSE.
	
- If owner of contract is not HC or a securitization investor (i.e. contract.Ownership.Type not in ['HC', 'TP_SEC']), then return FALSE.
	
- If ContractService.Status <> ‘Active' then return FALSE.
	
- If rule Check Moratorium for Grace period (with parameters ContractService and advance = FALSE ) returns FALSE then return FALSE.
	
- Read link to Payment Discipline Parameters, length of grace period, premium interest rate from parameters of service.
	
- Calculate end of Grace period by the rule Calculation of end date for Grace period with parameters
- service
- length of grace period
- link to Payment Discipline Parameters
which returns
- end of Grace period
- last due date of Grace period
	
- Find repayment date for grace period by the rule Calculation of repayment date for Grace period with parameters:
- contract
- end of Grace period
- last due date of Grace period
- link to Payment Discipline Parameters
	
- Evaluate payment discipline on contract by the rule Checking of payment discipline with parameters
- link to Payment Discipline Parameters
- contract
- reference date = repayment date for grace period
- last due date of Grace period
which returns
- result of checking of payment discipline (TRUE/FALSE)
- reason of fail
	
- If result of checking of payment discipline = FALSE then return FALSE.
	
- Return (TRUE, repayment date for grace period, last due date of Grace period, premium interest rate, link to Payment Discipline Parameters).

## 🔗 Connections (5)

- → Dependency: [[Requirement3 - Extension of ownership validation in services processing]]
- → Dependency: [[Calculation of end date for Grace period]]
- → Dependency: [[Calculation of repayment date for Grace period]]
- → Dependency: [[Check Moratorium for Grace period]]
- ← Dependency: [[{MOD}08.220 Check and process Grace period]]

## 📊 Appears In (1 diagrams)

- Use Case: Grace period processing
