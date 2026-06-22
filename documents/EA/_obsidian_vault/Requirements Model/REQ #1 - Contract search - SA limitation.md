---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8891 (CLM-2860) Sales Agents contract search limitation"
domain: "Requirements Model"
element_id: 1521983
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Contract search - SA limitation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8891 (CLM-2860) Sales Agents contract search limitation

## 📝 Notes

Goal of this task is creation of PH specific limitation for SA roles to search for contracts. Basically, it is extension of the original SA search was done in CLM-2233 task.

Following contract search rules are expected:

	
- contracts in status N (Signed), T (Cancelled) can be searchable in period between contract created date up to 35 days after that.  CANCELLED contracts means only contracts which were cancelled after SIGNED status.
	
- contracts in status N (Signed), T (Cancelled) can be searchable after contract created date plus 35 days only if some mistake ticket in OPEN status is assigned to them
	
- contracts in statuses A (Active), L (Paid-off), H (Written-off), Q (Sold) can be only searchable if some mistake ticket in open status is assigned to them
	
- all the above mentioned limitations will be extended with following rules:
- SA user can search for contracts by the above mentioned rules under the same POS they are currently assigned
- SA user can search for contracts by the above mentioned rules if contract is created / signed by the SA user (i.e. without POS limitation)

## 📊 Appears In (1 diagrams)

- Custom: CBL-8891 (CLM-2860) Sales Agents contract search limitation
