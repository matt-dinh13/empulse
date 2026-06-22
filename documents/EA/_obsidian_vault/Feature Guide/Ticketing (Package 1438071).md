---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/CLM"
domain: "Feature Guide"
element_id: 1438071
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Ticketing

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/CLM

## 📝 Notes

- for create and process various tickets (tasks) which require a solution various departments.

Ticketing module manage process of creation new ticket according to user defined criteria and managing it throughout its lifecycle. User can fill in the ticket details and select a department which should process the ticket. Application then stores the ticket for further processing. 

Module can be accessed from following locations: 

- Homer Select main page (section Ticketing)
- Client detail page (List of **communication** section)
- Contract detail page (List of **communication** section)
- Contract detail page (Register contract tab - see **Contract management**)

Module contains following functionality: 

- Show/Search ticket list
- Create ticket: general ticket without any relation to other entity, or related to a Communication, Contract, Client
- Create a mistake ticked used within the registration process to track mistakes on checked documents
- Assign an attachment to a ticket
- Change ticket status at processing

## Ticket Creation
User choose type of the ticket (i.e. Contract mistake, Contract management, Incoming Payments, Quality of service etc…) fill the description and assign it to department (i.e. BO - Call center, IT Helpdesk, Security etc…). Once ticket is created, it could be updated.

For creating a ticket from client's detail, it is needed to have client with contract with communication already created (more details in Contract detail – **Communication**).

For creating a ticket from Contract detail - Register contract tab, you need contract in Signed status. Here you can record ticket when recording mistake (more  details in Contract detail – Registration in **Contract management**)

## Ticket Search
There are three possible search types:

- Ticket search (standard) 
- Contract mistake search (POS) 
- Contract mistake search (Person) 

Ticket can be searched according to different criteria like Status, Code, Type and Subtype, Creation date (Created from and Created to), Assigned department etc.

If user does not fill sufficient search criteria, validation message is displayed. 
User can also empty search results and search criteria by clicking Reset button.

From this point, user can click on ticket detail where he can then update ticket, or just check its history. Ticket history shows ticket statuses, modification dates, people who modified it and comments.

## 📊 Appears In (1 diagrams)

- Package: CLM
