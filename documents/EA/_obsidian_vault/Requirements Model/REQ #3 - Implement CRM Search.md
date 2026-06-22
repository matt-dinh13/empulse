---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office"
domain: "Requirements Model"
element_id: 1688825
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #3 - Implement CRM Search

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office

## 📝 Notes

Goal of this task is to implement BO Limited Search. BO Limited search is panel for roles having 01.300 Search for contract (CRM Search) access right (primarily Back officer) and allows them to find contract based on:

	
- Contract Number
	
- Document Type and Document Id
	
- Vin Code
	
- National identification number
	
- Contract status and creation date


Initial configuration (VN)
Create role  CRM_SEARCH.
Assign to this role following access rights:

	
- UC01_300


	
- UC01_300_CRMSearch
	
- UC01_300_BeforeSign
	
- UC01_300_Signed
	
- UC01_300_Active
	
- UC01_300_CancelReject


Note: users with the role CRM_SEARCH  are able to use CRM search and filter based on statuses:

	
- In pre-process
	
- In process
	
- Approved
	
- Signed
	
- Active
	
- Cancelled
	
- Rejected

## 📊 Appears In (1 diagrams)

- Custom: REQ #3 - Implement CRM Search
