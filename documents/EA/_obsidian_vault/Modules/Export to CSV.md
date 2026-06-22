---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queues and tickets"
domain: "Modules"
element_id: 1868197
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Export to CSV

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queues and tickets

## 📝 Notes

Exports the contents of the Search registration tickets panel to a semicolon separated csv file by calling the /ticket-infos TCK REST API endpoint with the following parameters repeatedly until the response is empty:
- searchType=TICKET_SEARCH
- ticketType=REG_REA
- projection=QUEUE_DEFAULT
- projection=RELATED_SUBJECT_DEFAULT
- projection=ASSIGNED_TO_DEFAULT
- projection=TRANSITION_DEFAULT
- statusCodes=not there if 'All' is selected in the Status combobox, otherwise one status value as per search settings
- createdFrom= depending on the search settings
- createdTo= depending on the search settings
- page= depending on the page currently being exported, i.e. 1+

## 📊 Appears In (1 diagrams)

- Custom: Queues and tickets
