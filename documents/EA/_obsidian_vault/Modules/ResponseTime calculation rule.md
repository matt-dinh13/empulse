---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Change ticket status API usage"
domain: "Modules"
element_id: 1864810
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ResponseTime calculation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Change ticket status API usage

## 📝 Notes

Time difference between ticket goes from first status to the current last status. When ticket has no other status in history beyond created, this value is NULL.

Calculation:
ResponseTime (milisec) = Ticket last status - Ticket first status
Where:

	
- Ticket first status = First(Ticket.StatusTransition.CreationDate)


	
- Ticket last status = Last(Ticket.StatusTransition.CreationDate)
	
- where First(Ticket.StatusTransition.Status) <> Last(Ticket.StatusTransition.Status)

## 🔗 Connections (1)

- ← Dependency: [[10.062 Change ticket status service]]

## 📊 Appears In (2 diagrams)

- Logical: Ticketing - Change ticket status API usage
- Use Case: Ticketing - Ticket management
