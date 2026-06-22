---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Create Contract/Use Case Model"
domain: "Modules"
element_id: 1842039
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Set contract default ownership

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Create Contract/Use Case Model

## 📝 Notes

{ADD CLM-6660/}
This rules describes how to set contract ownerships.
Inputs:

	
- Contract

Steps:

	
- Create a new Contract Party Role with:
- RoleType = LENDER,
- PartyCode = global parameter DEFAULT_CREDIT_OWNER,
- ValidFrom = current date,
- ValidTo = null.
	
- Link it to Contract.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Create Contract (UseCase 1842036)]]

## 📊 Appears In (1 diagrams)

- Use Case: Create Contract - Use Case Model
