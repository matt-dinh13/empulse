---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation/REQ#1 - General Ticket creation"
domain: "Modules"
element_id: 1799573
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 REQ#1 - General ticket creation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation/REQ#1 - General Ticket creation

## 📝 Notes

User story: User can create a general ticket via GUI based on ticket type and subtype and assign it to the specified department (ticket role)


	
- New API - REQ#1.1 - Create IticketManagement API and new methods
	
- Set up a new UC (10.022 Create ticket) which will ensure creation of a ticket on requests of various modules by ticketing setting. Into this UC will be moved general part of UC 10.020 Create ticket (manually) - see REQ#1.2 - Create a new method for general ticket creation
	
- Modification of UC 10.022 Create ticket - see REQ#1.3 - Modification of the current use cases for ticket creation

## 🔗 Connections (2)

- ← Generalization: [[REQ#1.2 - Create a new method for general ticket creation]]
- ← Generalization: [[REQ#1.1 - Create IticketManagement API and new methods]]

## 📊 Appears In (2 diagrams)

- Custom: REQ#1 - General Ticket creation
- Custom: Ticketing-separation
