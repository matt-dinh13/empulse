---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA"
domain: "Requirements Model"
element_id: 1822387
diagrams: 3
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Sales agent search

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7036 (CLM-2233) Restrict Contract search function for SA

## 📝 Notes

Sales agent search panel is used for roles (primarily Sales agent) having 01.300 Search for contract (sales agent)  access right allowing them to find:

	
- Active contracts processed by selected POS (at least one of selected business event was processed by selected POS) and filtered by search criteria Contract number, Date of birth, Document type and Document ID number.
	
- Active contracts  created within last 60 days processed by selected POS and selected user (at least of selected business event was processed by selected POS and user), if there are no search criteria for filtering.


Visibility:  for roles with UC01_300_SearchSA assigned

## 📊 Appears In (3 diagrams)

- Custom: CBL-7036 (CLM-2233) Restrict Contract search function for SA
- Custom: Search for contract
- Custom: Search for contract UI
