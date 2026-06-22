---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans"
domain: "Requirements Model"
element_id: 1063130
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - New functionality for preparation of consolidation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-93 (CBL-29) Consolidation (Top-up) for cash loans

## 📝 Notes

Consolidation preparation will be triggered by ContractSignSE event (shot in UC 01.180)
Consolidation contract will have:

	
- ProvidedCreditAmount = sum(Consolidated contracts outstanding debt amount) + Top-up amount
	
- generated (and fixed) installment schedule (IS cannot be changed within consolidation process!)
	
- Consolidation Contract Service with financial parameters of consolidation


What it should do:

	
- Check if:
- contract is "consolidation" -> Contract.Consolidating = TRUE; Exists records of consolidated Contracts -> Refinanced Contract
- consolidated contract(s) exists in correct status
	
- Get financial parameters of the consolidation from Refinanced Contract:
- calculate Outstanding debt on consolidated contract(s) - FER (call IS) --- nebudeme provadet
	
- Check if financial parameters from Refinanced Contract matches the calculated values --- nebudeme provadet
- if FER amount > planned FER amounts -> end of consolidation
- if FER amount <= planned FER amounts -> OK
	
- Create request for consolidation contract
	
- Block bonus services (Gift, Grace,...) on consolidated contract(s)


	
- Top-up variant
- Create payment for client if exists  -> send them into PAY
- Create FER request(s) for consolidated contract(s) --- vyrobit request? az pri potvrzeni platby?


	
- Restructuring debt variant
- Create FER request(s) for consolidated contract(s) --- vyrobit request? az pri potvrzeni platby?
- Set ConditionAccepted
- what next?

## 📊 Appears In (1 diagrams)

- Custom: CLM-93 (CBL-29) Consolidation (Top-up) for cash loans
