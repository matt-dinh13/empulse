---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets"
domain: "Modules"
element_id: 1800560
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Search type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets

## 📝 Notes

Combo-box which enables users to select one of search variants to which the user has access right.

The list of items from SearchType entity returned by Enum/SearchTypes.GET and enabled by user privilege: 

	
- TICKET_SEARCH - Enabled for privilege UC10_010_ALL (All ticket search)
	
- MISTAKE_SEARCH_POS - Enabled for privilege UC10_010_POS (Contract mistake - POS)
	
- MISTAKE_SEARCH_PERSON - Enabled for privilege UC10_010_PERSON (Contract mistake - person)
	
- MISTAKE_SEARCH_POS_LIMIT - Enabled for privilege UC10_010_POS_LIMIT (Contract mistake - POS with limitation)
	
- {ADD CLM-2860}MISTAKE_SEARCH_PERSON_LIMIT - Enabled for privilege UC10_010_PERSON_LIMIT (Contract mistake  - person with limitation){/ADD}


On the form opening, no value is chosen

Localization code: TCK_SearchType

## 📊 Appears In (1 diagrams)

- Custom: Search for Tickets - user interface
