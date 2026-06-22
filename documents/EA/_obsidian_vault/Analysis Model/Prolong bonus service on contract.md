---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833422
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Prolong bonus service on contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

{ADD CBL 9520 (IS-846)}
This rule describes setting an attribute Date Value of Contract Service Param for bonus services

Input:

	
- Postpone
	
- Contract
	
- Loan service request


Steps:

	
- System gets all active bonus services adjusted on the contract (i.e. Contract Service having Service -> Service Type.Service Type Flag = BONUS_SERVICE and Contract Service.Status = ACTIVE and Contract = processed Contract)
	
- - For Loan Service Request.Request type = PAYHOL, system gets Payment Holiday Request.Deferred Periods Number for processed PAYHOL service (Payment Holiday Request having Loan Service Request)

        - For Loan Service Request.Request type = LRES, system count Deferred Period Number as Number of terms from Loan Service Request.Service Offer Installment  - Financial Parameters.Terms (Financial parameters before loan restructuring). If Deferred Period number < 0, set Deferred Period number = 0.
3.    Set Contract Service Param. Date Value =  Date Value + Deferred Period Numbers from step 2 (in months) where Contract Service.ID = Contract Services ID found in step 1, Contract Service Param.Param Type = END_OF_GRACE_PERIOD AND
     - For Loan Service Request.Request type = PAYHOL: Contract Service Param.Date Value >= Payment Holiday Request.Deffered Period Start Date
     - For For Loan Service Request.Request type = LRES: Contract Service Param.Date Value >= Lres Request.First Due Date Restructured

{/ADD CBL 9520 (IS-846)}

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
