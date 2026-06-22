---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-2092 (CLM-1017) TCK - Ticket Search Restriction for SA"
domain: "Modules"
element_id: 1799550
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#1 - Restriction of Search for tickets function

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-2092 (CLM-1017) TCK - Ticket Search Restriction for SA

## 📝 Notes

Goal of this requirement is to limit the ticket search only to status OPEN for SA operators. OPEN tickets shall only be viewed up to 30 days from the date ticket was created (Defined number of days should be in global parameter).
Proposed solution:

	
- A new choice in the "Search type" listbox - Mistake ticket with limitation - on the Search for tickets screen
	
- New access rights for the new choice in the "Search type" listbox


	
- Some search criteria will be disabled for “Mistake ticket with limitation” choice (Status, Created from and Created To

## 📊 Appears In (1 diagrams)

- Custom: CBL-2092 (CLM-1017) TCK - Ticket Search Restriction for SA
