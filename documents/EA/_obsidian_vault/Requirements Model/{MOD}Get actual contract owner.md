---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4482 - Fix getting actual contract owner"
domain: "Requirements Model"
element_id: 1878895
diagrams: 2
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Get actual contract owner

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-4482 - Fix getting actual contract owner

## 📝 Notes

{ADD CLM-4482/}
Inputs:

	
- Owner type


Steps:

	
- {CLM-6237}If CLM Feature Flag loadOwnershipWithoutDatetime = 1 then {/DEL}system selects Owner as
Contract -> Ownership[.Valid to is Null]
else system selects Owner as
Contract -> Ownership[.Valid from < actual date and (.Valid to is Null or .Valid to > actual date)]
	
- If Owner type is not Null and Owner.Type <> Owner type then Owner.Code is Null
	
- System returns Owner.Code

## 📊 Appears In (2 diagrams)

- Custom: CLM-4482 - Fix getting actual contract owner
- Custom: Common Business Rules for Contract Management
