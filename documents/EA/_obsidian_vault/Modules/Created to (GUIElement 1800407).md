---
type: GUIElement
stereotype: "date"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queues and tickets"
domain: "Modules"
element_id: 1800407
diagrams: 3
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Created to

> **Type**: GUIElement · **Stereotype**: «date»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queues and tickets

## 📝 Notes

End date of search interval. If user selects this date, system finds tickets which has creation date at this day or before this day.
Datepicker
Search parameter: Ticket.CreationDate <= {value}
{ADD CLM-1017}It is disabled on Search panel - All tickets if Search type.MISTAKE_SEARCH_POS_LIMIT is chosen{/ADD}

Localization code: TCK_CreatedTo

## 🔗 Connections (1)

- → Dependency: [[Date cannot be in future]]

## 📊 Appears In (3 diagrams)

- Custom: Queues and tickets
- Custom: Search panel - all tickets types
- Custom: Search panel - mistake tickets
