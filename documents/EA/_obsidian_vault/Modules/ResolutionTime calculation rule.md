---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Change ticket status API usage"
domain: "Modules"
element_id: 1864804
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ResolutionTime calculation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Ticketing - Change ticket status API usage

## 📝 Notes

Time difference between ticket first status and last cancelled, or closed status. If ticket has no cancelled, or closed status in history as last record, this field will be empty.

Calculation:
ResolutionTime (milisec) = Ticket last status - Ticket first status
where:

	
- Ticket first status = First(Ticket.StatusTransition.CreationDate) where Ticket.StatusTransition.Status not in (CLOSED, CANCELLED)
	
- Ticket last status = Last(Ticket.StatusTransition.CreationDate) where Ticket.StatusTransition.Status in (CLOSED, CANCELLED)

## 🔗 Connections (1)

- ← Dependency: [[10.062 Change ticket status service]]

## 📊 Appears In (2 diagrams)

- Logical: Ticketing - Change ticket status API usage
- Use Case: Ticketing - Ticket management
