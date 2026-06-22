---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation"
domain: "Modules"
element_id: 1799570
diagrams: 2
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#0.2 - Ticketing setting domain model modification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation

## 📝 Notes

There are described modifications of the Ticketing domain entities and some data migrations which happen in connection of the changes.

	
- Rename original TicketingLogic entity into TicketingRule
	
- Remove association entity Application Role2Ticket Subtype (if still exists)
	
- Remove reference to Document Type from MistakeSetting entity and replace it by storing Document Type.Code into MistakeSetting.DocumentTypeCode
	
- Create new entities for access right control: ApplicationRole, PrivilegeMap, AccessRight, PrivilegeScope (similar entities as used in the BSL)
	
- Remove reference to the original BSL Application Role from ApplicationRole2TicketAccessRole and replace it by storing to the new ApplicationRole entity

## 📊 Appears In (2 diagrams)

- Custom: Ticketing-separation
- Logical: Ticketing setting domain model modification
