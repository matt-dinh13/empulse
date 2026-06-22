---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822479
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contract status

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

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

## 🔗 Connections (3)

- → Dependency: [[01.300 Search for contract (before sign)]]
- → Dependency: [[01.300 Search for contract (cancel reject)]]
- → Dependency: [[Optional (Action 1789801)]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract
