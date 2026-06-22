---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12831 (CSI-617) Mandatory Life Insurance for REL"
domain: "Requirements Model"
element_id: 1603418
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 General requirement description

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12831 (CSI-617) Mandatory Life Insurance for REL

## 📝 Notes

Requirement: Any CEL and REL contracts created by HCID will need to have PPI (mandatory insurance) if client doesn't ask/have a standard paid "life" insurance.
Currently, system supports application of the PPI for CEL contracts and goal of the task is to have "mandatory insurance" for REL contracts as well.

Rules applied on REL contracts:

	
- If a standard paid life insurance is cancelled, terminated, switched-off, then the mandatory insurance is added to the contract and switched-on. If the mandatory insurance already exists on the contract, it is only switched-on.
	
- If a standard paid life insurance is added and switched-on on the contract, the mandatory insurance is switched-off only (i.e. it won't be and terminated).
Notice: if a standard paid life insurance is added but it isn't switched-on, the mandatory insurance stays unchanged!
	
- Any user is not allowed to add/switch-on/switch-off the mandatory insurance via UI neither API
	
- The mandatory insurance is visible in the Contract detail - Insurance tab
	
- For all existing REL contracts without any paid life insurance created before the task deployment, the mandatory insurance must be added. This requirement will be solved via data manipulation in cooperation with AP team.

## 🔗 Connections (4)

- ← Generalization: [[REQ #4 - Limitation of the mandatory insurance in offering and operation status change]]
- ← Generalization: [[REQ #1 - Replacement of REL insurance based on defined rules]]
- ← Generalization: [[REQ #2 - Deactivation of mandatory insurance on standard life insurance adding]]
- ← Generalization: [[REQ #3 - Prolongation of the REL mandatory insurance]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12831 (CSI-617) Mandatory Life Insurance for REL
