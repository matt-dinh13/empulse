---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Business rules"
domain: "Analysis Model"
element_id: 1371164
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Update contract financial partnership algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Business rules

## 📝 Notes

Update of contract financial partnership, e.g. Joint Financial Scheme (JFS) partnership

Input
Contract
Partnerships - collection of ContractFinancialPartnership

Steps

	
- Execute Delete contract financial partnership algorithm passing Contract as input parameter
	
- For each ContractJFSPartnership in Partnerships:

a) Create new Contract -> Contract Party Role [Role Type = JFS_PARTNER]
set Contract = Contract
set PartyCode = ContractJFSPartnership.partnerCode
set Valid From = ContractJFSPartnership.validFrom
set Valid To = ContractJFSPartnership.validTo

b) Create new ContractPartyRole -> Contract Party Role Attribute [Type = JFS_PARTNER_AGREEMENT]
set Value = ContractJFSPartnership.partnershipAgreementCode

c) Create new ContractPartyRole -> Contract Party Role Attribute [Type = JFS_PARTNER_SHARE]
set Value = ContractJFSPartnership.partnershipShare

## 🔗 Connections (4)

- → Dependency: [[Delete contract financial partnership algorithm]]
- ← Dependency: [[{DEL}01.871 Process financial partnership file (UseCase 1713672)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Financial partnership
