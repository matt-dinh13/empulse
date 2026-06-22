---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office"
domain: "Requirements Model"
element_id: 1822427
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Contract status

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office

## 📝 Notes

Check-list-box

List of displayed contract statuses depends on user's access rights:

	
- 01.300 Search for contract (before sign)
	
- 01.300 Search for contract (signed)
	
- 01.300 Search for contract (active)
	
- 01.300 Search for contract (after sign)
	
- 01.300 Search for contract (cancel reject)
	
- If user does not have any of above access rights, the list is empty and user cannot continue with the search.


If user doesn't check any contract status, only statuses which user has access rights for are used for contract search.

Actual status of contract
CONTRACT.STATUS.NAME

Localization code: CON_Status

## 📊 Appears In (2 diagrams)

- Custom: REQ #3 - Implement CRM Search
- Custom: Search for contract
