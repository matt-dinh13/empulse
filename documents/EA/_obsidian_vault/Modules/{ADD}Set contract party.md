---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{ADD}Contract Parties/Use Case Model"
domain: "Modules"
element_id: 1842037
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Set contract party

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{ADD}Contract Parties/Use Case Model

## 📝 Notes

{ADD CLM-6660/}
This rule describes how to add a party (with a respective role) to a contract, e.g. Joint Financial Scheme (JFS) partnership

Inputs:

	
- ContractPartnership - a record with:
- code,
- type,
- validFrom/To.
	
- Contract


Steps:

	
- Create a new Contract Party Role with:
- RoleType = Partnership.type,
- PartyCode = Partnership.code,
- Valid From = Partnership.validFrom,
- Valid To = Partnership.validTo.
	
- Link the record to Contract.


Notes:

	
- If any ContractPartnership.code/type doesn't exist in the corresponding enums, this algorithm ends with an error and no data are stored.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Create Contract Party]]

## 📊 Appears In (1 diagrams)

- Use Case: Manage Contract Parties - Use case model
