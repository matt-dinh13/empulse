---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights"
domain: "Analysis Model"
element_id: 1755899
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to Contract by Sales area for contract detail

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights

## 📝 Notes

If GlobalParameter.UseSalesArea = False then the contract can be accessed without sales area restriction.

Entry condition A: User has access right to all sales areas (01.210 Show contract detail (all sales areas))
Entry condition B: User is currently logged on Sales area
Entry condition C: User has access right 01.210 Show contract detail (managed salesrooms).

	
- If C = True
the contract can be accessed without sales area restriction.


	
- If A = False AND B = False AND C = False then
the contract is not accessible.
	
- If (A = False AND B = True  AND C = False) or (A = True AND B = True AND C = False ) then
the contract is accessible if it was created in Sales area
	
- If A = True AND B = False  AND C = False  then
the contract can be accessed without sales area restriction.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (1 diagrams)

- Custom: Access Rights
