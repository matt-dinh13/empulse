---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage"
domain: "Requirements Model"
element_id: 1833368
diagrams: 2
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 Check TopUp overlap period for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-18427 (CSI-2407) TopUp Service usage

## 📝 Notes

{ADD CSI-2407 /}
This rule describes the way how to find overlap period end date for provided Contract and compare with input date.

Input parameters

	
- Contract
	
- Request Date (optional, current date is used if not defined)

Output:

	
- TRUE if request date is inside overlap period, else FALSE


Steps:

	
- system search for the contract service with contract service parameter TOPUP_OVERLAP_PERIOD_END_DATE  and related to the processed Contract
	
- if contract service is not found then system returns FALSE and rule ends
	
- system uses TOPUP_OVERLAP_PERIOD_END_DATE date value (if more records found, then max value is used) and compare with Request Date:
if  TOPUP_OVERLAP_PERIOD_END_DATE >= Request Date then system returns TRUE else FALSE

## 🔗 Connections (9)

- ← Dependency: [[{MOD}Check COP ER request availability]]
- ← Dependency: [[{MOD}Check CET request availability]]
- ← Dependency: [[Check ER request availability]]
- ← Dependency: [[{MOD}Check conditions to contract service termination]]
- ← Dependency: [[{MOD}Check conditions to insurance termination]]
- ← Dependency: [[{MOD}08.358 Create request for payment holiday common]]
- ← Dependency: [[{MOD}08.403 Create request for loan restructuring common]]
- ← Dependency: [[{MOD}08.064 Create request for change due date common]]
- ← Dependency: [[08.051 Create PER request common]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
