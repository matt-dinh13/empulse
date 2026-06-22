---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Access Rights"
domain: "Analysis Model"
element_id: 1750285
diagrams: 3
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.020 Create contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Access Rights

## 📝 Notes

Purpose of this use case is to allow the user to create a contract.
The UC starts by decision how the process should start.

	
- If the user selects product selection Product calculator appears.
	
- If the user selects client identification 1BoD appears.
	
- The user is also able to cancel the process.


The system decides (on the base of POS setting in HOMESIS) whether one step or two steps process will be used. If one step process is set after clicking to the Create contract icon the system continues with product selection (without possibility to decide how to start).

## 🔗 Connections (8)

- → Realisation: [[REQ#1 Save information about application creation]]
- → Dependency: [[Algorithm_ Select sales process type]]
- → UseCase «include»: [[{MOD}01.082 Fill in application - 1BoD]]
- → Realisation: [[REQ 1.1. Function for decision about sales process type]]
- → UseCase «include»: [[01.010 Choose product offer (UseCase 1827711)]]
- → UseCase «include»: [[{MOD}01.160 Search client]]
- → Association: [[User (Actor 1880892)]]
- → Realisation: [[01.020 Create contract]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Use Case: Choose product offer
- Use Case: Contract origination
