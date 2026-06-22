---
type: Screen
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queue assignment modal"
domain: "Modules"
element_id: 1800485
diagrams: 1
connections: 0
tags:
  - screen
  - modules
---

# 📱 Queue assignment

> **Type**: Screen
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Queue assignment modal

## 📝 Notes

Queue from/to which the ticket is being un/assigned.
See UC's {ADD}10.032 Add ticket to queue and {ADD}10.033 Remove ticket from queue for more information) 

Source: filtered data from Open API endpoint call /v2/queues?activeOnly=true&myOnly=false resulting in all potential active queues to which the ticket can be un/assigned from/to.

## 📊 Appears In (1 diagrams)

- Custom: {ADD}Queue assignment modal
