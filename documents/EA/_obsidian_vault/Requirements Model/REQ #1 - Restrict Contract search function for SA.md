---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA"
domain: "Requirements Model"
element_id: 1449064
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Restrict Contract search function for SA

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA

## 📝 Notes

Goal of this requirement is to implement new contract search "Sales agent search". This search returns:

	
- Active contracts processed by selected POS (at least one of selected business event was processed by selected POS) and filtered by search criteria Contract number, Date of birth, Document type and Document ID number.
	
- Active contracts  created within last 60 days processed by selected POS and selected user (at least of selected business event was processed by selected POS and user), if there are no search criteria for filtering. For this search new message to display in GUI.

## 📊 Appears In (1 diagrams)

- Custom: CBL-7036 (CLM-2233) Restrict Contract search function for SA
