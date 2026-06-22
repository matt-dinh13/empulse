---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/Logical data model"
domain: "Analysis Model"
element_id: 1799223
diagrams: 3
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 Ticket

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/Logical data model

## 📝 Notes

Holds main information about the ticket
Relation to Contract Package added.
Caution - Modeled as relation - not seen as property / attribute

## 🔗 Connections (10)

- → Dependency: [[Priority (Enumeration 1799236)]]
- ← Aggregation: [[Attachment (Class 1799250)]]
- → Dependency: [[TicketTypeSpecification]]
- → Association: [[Department (Enumeration 1799235)]]
- → Association: [[TicketType]]
- ← Aggregation: [[StatusTransition (Class 1799246)]]
- ← Aggregation: [[RelatedSubject (Class 1798519)]]
- → Association: [[{MOD}Ticket2Queue]]
- → Association: [[TicketStatus]]
- ← Dependency: [[_tickets]]

## 📊 Appears In (3 diagrams)

- Logical: Contract registration
- Logical: Ticketing - Logical Data Model
- Logical: TicketType extension - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Description | Text |  |
| ResolutionTime | Number |  |
| ResponseTime | Number |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
| Type Specification | Code |  |
| Priority | Priority |  |
| Id | Number (18,0) |  |
| {ADD}AssignedTo | User |  |
