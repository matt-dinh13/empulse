---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules"
domain: "Analysis Model"
element_id: 1822339
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to Contract search panel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Business rules

## 📝 Notes

Rights to show any sub-panel in search-filter section:
For each sub-panel it is possible to define a user right which controls if it is possible to show the sub-panel to user or not.
A user can be assigned to more than one role. This means that it is necessary to define the order in which it is evaluated, which panel is shown on the screen. When evaluated, first panel, on which user has right is found, evaluation is finished and founded panel is shown.
There can be also situation when a user has right to run use case Search Contract, but none of his roles has the right to show any sub-panel. For this case we define default sub-panel with rules below:

	
- only one sub-panel can be marked as default
	
- default sub-panel is evaluated as the last


List below describes evaluating order and also default panel:

	
- A1 (predefined search filters)

(UC01_300_A1_AC), Evaluation order = 1

	
- A2 (custom search)

(UC01_300_A2_AC), Evaluation order = 2

	
- A3 (predefined search filters + custom)

(UC01_300_A3_AC), Evaluation order = default

If a user has access rights for UC01_300_A2_AC (Custom search) or UC01_300_A3_AC (Predefined search filters + Custom), but not any of access rights UC01_300_BeforeSign, UC01_300_AfterSign, UC01_300_CancelReject then Custom search sub-panel is not shown to user.

Other panels:

	
- Sub-panel Custom SNM search will be visible only for users with access right 01.300 Search for contract (custom SNM search)


	
- Sub-panel Custom BO Search will be visible only for users with access right 01.300 Search for contract (Custom BO Search)


	
- Sub-panel for Contracts for 2BoD filling search with filtering criteria will be visible only:
- for users with access rights: 01.300 Search for contract (filter for BO user) or  01.300 Search for contract (filter for BO administrator)
- or when more than one active preferred languages are defined in the system.
	
- Sub-panel Telesales search will be visible only for users with access right 01.300 Search for contract (telesales)


	
- Sub-panel Sale agent search will be visible only for users with access right 01.300 Search for contract (sale agent)

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.300 Search for contract]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Contract search
