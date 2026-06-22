---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Business rules"
domain: "Analysis Model"
element_id: 1371165
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Set contract default JFS partnership algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Business rules

## 📝 Notes

Setting of contract default JFS partnership

Input
Contract

Steps

	
- Execute Delete contract financial partnership algorithm passing Contract as input parameter
	
- Create new Contract -> Contract Party Role [Role Type = JFS_PARTNER]
set Contract = Contract
set PartyCode = global parameter DefaultJFSPartnerCode
set Valid From = current date
set Valid To = null

## 🔗 Connections (2)

- → Dependency: [[Delete contract financial partnership algorithm]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Financial partnership
