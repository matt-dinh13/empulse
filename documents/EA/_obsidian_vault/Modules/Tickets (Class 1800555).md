---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets"
domain: "Modules"
element_id: 1800555
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Tickets

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/User Interface Model/Search for Tickets

## 📝 Notes

Search result grid
Only tickets with TicketCategory.VisibleYN = 1  and TicketType.VisibleYN = 1 are shown in the list.
Column order:

	
- Status
	
- Code
	
- Category
	
- Type
	
- Created
	
- Modified
	
- Created by
	
- Modified by
	
- Reaction time
	
- Resolving time
	
- Action buttons


Paging = YES

## 📊 Appears In (1 diagrams)

- Custom: Search for Tickets - user interface

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Status | Ticket Status |  |
| Code | string |  |
| Category | TicketCategory |  |
| Type | TicketType |  |
| Created | string |  |
| Modified | dateTime |  |
| Created by | string |  |
| Modified by | string |  |
| Response time | time |  |
| Resolution time | time |  |
| {MOD}Detail | button |  |
