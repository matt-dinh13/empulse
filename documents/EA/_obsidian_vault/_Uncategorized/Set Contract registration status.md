---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1836941
diagrams: 0
connections: 3
tags:
  - requirement
  - _uncategorized
---

# 📋 Set Contract registration status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This algorithm describes a rule for setting contract registration status.

Input parameters:

	
- Contract
	
- Registration Status


Steps:
1. Update Contract.Registration Status (the Contract history stays unchanged):

	
- Registration Status = Registration Status


2. Create a new record in Registration Status Transition:

	
- Created By = the current user
	
- Creation Date = the current date and time
	
- Status = Registration Status

## 🔗 Connections (3)

- ← Dependency: [[01.265 Receive contract package (UseCase 1759980)]]
- ← Dependency: [[Application Processing]]
- ← Dependency: [[{MOD}Sign contract finalization]]
