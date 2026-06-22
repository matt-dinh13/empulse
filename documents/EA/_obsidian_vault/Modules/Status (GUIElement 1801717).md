---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets/Search panel - all tickets types"
domain: "Modules"
element_id: 1801717
diagrams: 2
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Status

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets/Search panel - all tickets types

## 📝 Notes

List of Ticket statuses. User can select just one option. 

Source: Status.label; Status 'ASSIGNED' is excluded from the list.
Search parameter: Ticket.Status = {status}
{ADD CLM-1017}It is disabled if Search type.MISTAKE_SEARCH_POS_LIMIT is chosen{/ADD} 
Is mandatory when "My processed tickets" is checked. 

Localization code: TCK_Status

## 📊 Appears In (2 diagrams)

- Custom: Search panel - all tickets types
- Custom: Search panel - mistake tickets
