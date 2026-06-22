---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1573579
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Update application financial partnership algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Update of application financial partnership, e.g. Joint Financial Scheme (JFS) partnership

Inputs:

	
- Contract
	
- Partnerships - collection of ContractFinancialPartnership


Steps:

	
- Execute Delete application relationship algorithm with Contract and RelationshipRoleType='JOINT_LENDER' as input parameters.
	
- For each ContractJFSPartnership in Partnerships:

a) Create new Contract -> Relationship [Role Type = JOINT_LENDER]
set Application = Contract
set Party = ContractJFSPartnership.partnerCode

b) Create new Relationship -> Relationship_Attribute 
- Type = JOINT_LENDING_AGREEMENT, Value = ContractJFSPartnership.partnershipAgreementCode
- Type = JOINT_LENDING_SHARE, Value = ContractJFSPartnership.partnershipShare
- Type = VALID_FROM, Value = ContractJFSPartnership.validFrom
- Type = VALID_TO, Value = ContractJFSPartnership.validTo

## 🔗 Connections (1)

- → Dependency: [[Delete application relationship algorithm]]
