---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878442
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 Get customer contracts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

This object describes the steps, how system gets the list of customer's contracts (possibly filtered based on their statuses).

Input:
- CUID = client's unique identifier
- ContractStatus [0..n] = applicable contract statuses (for filtering of found contracts)

Output:
- Contract [0..n] = list of customer's contracts (in applicable statuses)


Steps:

	
- System takes the CUID from the input and finds all contracts related to the corresponding customer (i.e. Client[.CUID=CUID]->Deal->Contract).
	
- If any ContractStatus is on the input, system filters the contracts found in the previous step accordingly (i.e. where Contract.Status is in (ContractStatus)).
	
- System takes each Contract retrieved in previous steps and returns it to the calling object. Algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}06.051 Process customers notification message]]
- ← Dependency: [[{MOD}06.010 Identify Client]]
