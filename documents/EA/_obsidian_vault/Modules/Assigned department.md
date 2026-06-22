---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets/Search panel - all tickets types"
domain: "Modules"
element_id: 1801714
diagrams: 2
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Assigned department

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets/Search panel - all tickets types

## 📝 Notes

List of all departments which user's roles can search for 
{ADD_CLM190}Visible only for user roles with privilege for 10.050 Assign ticket.{/ADD}

{ADD CLM-4779}UI list Assigned department shown if Search type=Mistake search (POS){/ADD}
Source: Tck Department -> Tck Label
Search parameter: Ticket.Department = {Assigned department}

Localization code: TCK_AssignedTo

## 📊 Appears In (2 diagrams)

- Custom: Search panel - all tickets types
- Custom: Search panel - mistake tickets
