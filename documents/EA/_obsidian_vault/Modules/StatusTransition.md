---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799201
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 StatusTransition

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

Holds a history of changes of defined attributes of the ticket (e.g. status changes, comments, etc.).

## 🔗 Connections (7)

- → Association: [[StatusTransition]]
- ← Association: [[StatusTransition]]
- → Dependency: [[Type (Enumeration 1799214)]]
- → Association: [[Department (Enumeration 1799202)]]
- → Association: [[Status (Enumeration 1799211)]]
- → Dependency: [[ModificationType]]
- → Aggregation: [[Ticket (Class 1799206)]]

## 📊 Appears In (1 diagrams)

- Logical: Part 1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Comment | Varchar2 (2047) |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| CreationDate | DateTime |  |
| TypeCode | Varchar2 (30) |  |
| TicketId | Int (18) |  |
| Status | Varchar2 (20) |  |
| Id | Int (18) Unique |  |
| Deparment | Varchar2 (30) |  |
| {ADD_v03}Version | Int (18) |  |
| {ADD_v03}ModificationType | Varchar2(1) |  |
