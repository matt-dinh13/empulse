---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing"
domain: "Requirements Model"
element_id: 1723837
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - Modify processing of CET + FER request and use LoanServiceRequestExecutedSE and UC 01.172 for automatic finishing after processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing

## 📝 Notes

Modifications:

	
- UC {MOD}03.100 Check and process Early repayment request   - remove direct call of Contract finish
	
- UC {MOD}08.280 Check and process CET request  - remove direct call of Contract finish
	
- UC {MOD}01.712 Finish contract on service execution - add processing of CET + FER services by using of new UC {ADD}01.714 Process contract registering and finishing
	
- UC {MOD}01.252 Evaluate Contract Service Parameters  - update to use new UC {ADD}01.714 Process contract registering and finishing
	
- UC {MOD}01.279 Choose contracts suitable to registration and finishing  - update to use new UC{ADD}01.714 Process contract registering and finishing

## 📊 Appears In (1 diagrams)

- Custom: CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing
