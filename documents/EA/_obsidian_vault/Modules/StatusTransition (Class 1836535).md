---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions"
domain: "Modules"
element_id: 1836535
diagrams: 5
connections: 2
tags:
  - class
  - modules
---

# 🔷 StatusTransition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions

## 📝 Notes

Log of changes (status and department transitions) on the Ticket object
Read only

## 🔗 Connections (2)

- ← Usage: [[StatusTransitions]]
- ← Usage: [[Ticket (Class 1836532)]]

## 📊 Appears In (5 diagrams)

- Logical: Schema definitions
- Logical: Ticketing - Assign ticket to department API usage
- Logical: Ticketing - Change ticket status API usage
- Logical: Ticketing - Get Ticket details
- Logical: TicketManagement - Create ticket overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | Status |  |
| department | Department |  |
| comment | string |  |
| createdBy | string |  |
| creationDate | dateTime |  |
| ticketCode | string |  |
