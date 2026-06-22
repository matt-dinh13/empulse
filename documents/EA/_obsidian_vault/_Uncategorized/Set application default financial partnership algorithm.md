---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1573581
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Set application default financial partnership algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Setting of application default financial partnership

Inputs:

	
- Contract


Steps:

	
- Execute Delete application relationship algorithm with Contract and RelationshipRoleType='JOINT_LENDER' as input parameters.
	
- Create new Contract -> Relationship [Role Type = JOINT_LENDER]
set Application = Contract
set PartyCode = global parameter DefaultJFSPartnerCode
set Valid From = current date
set Valid To = null

## 🔗 Connections (1)

- → Dependency: [[Delete application relationship algorithm]]
