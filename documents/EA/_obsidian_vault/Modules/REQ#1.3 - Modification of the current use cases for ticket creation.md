---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation/REQ#1 - General Ticket creation"
domain: "Modules"
element_id: 1800602
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#1.3 - Modification of the current use cases for ticket creation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation/REQ#1 - General Ticket creation

## 📝 Notes

The current 10.020 Create ticket (manually) is changed - this will be only "GUI" UC. Core fce for ticket creation will be moved into UC {ADD}10.022 Create general ticket

New version of the UC 10.020:


	
- System gets:
- Ticket Types and their Ticket Subtypes by calling ITicketManagement.GetTicketList interface
- Allowed departments by calling ITicketManagement.GetAvailableTicketRoles
	
- System opens Create ticket form and populates lists by values from previous step
	
- User enters ticket attributes into form. User may assign specific ticket subtype only to departments which are allowed to work with specific ticket subtype in InitialState(according to TicketingLogic table)
	
- User requests to create of the ticket by click on Create button.
	
- System call ITicketManagement.CreateTicket with CreateTicketRequest parameters:
	
- If the screen is not called as modal window, system opens the Ticket detail form by calling 10.030 Show ticket use case with created ticket (TICKET.ID) as parameter
	
- Use case ends

## 📊 Appears In (1 diagrams)

- Custom: REQ#1 - General Ticket creation
