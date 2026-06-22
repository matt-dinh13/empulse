---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-11956 (CLM-4061) Complaints Data and Communication Data to Hadoop"
domain: "Modules"
element_id: 1836532
diagrams: 10
connections: 10
tags:
  - class
  - modules
---

# 🔷 Ticket

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-11956 (CLM-4061) Complaints Data and Communication Data to Hadoop

## 🔗 Connections (9)

- ← Dependency: [[{ADD}TicketRevision]]
- ← Usage: [[Tickets (Class 1836080)]]
- ← Usage: [[Tickets (Class 1836080)]]
- → Usage: [[RelatedSubject (Class 1836557)]]
- → Usage: [[StatusTransition (Class 1836535)]]
- → Usage: [[AssignDepartment]]
- → Usage: [[RelatedSubject (Class 1836537)]]
- → Usage: [[Attachment (Class 1836550)]]
- → Usage: [[Rule (Class 1836541)]]

## 📊 Appears In (10 diagrams)

- Custom: CBL-11956 (CLM-4061) Complaints Data and Communication Data to Hadoop
- Custom: CBL-11956 (CLM-4075) Complaints Data Data to Hadoop - TCK
- Logical: Schema definitions
- Logical: TicketChangedNotification
- Logical: Ticketing - Assign ticket to department API usage
- Logical: Ticketing - Create mistake ticket API usage
- Logical: Ticketing - Create ticket overview (with TypeSpecification)
- Logical: Ticketing - Create ticket revision
- Logical: Ticketing - Get Ticket details
- Logical: TicketManagement - Create ticket overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| department | Department |  |
| description | string |  |
| type | Type |  |
| code | string |  |
| status | Status |  |
| priority | Priority |  |
| {DEL}typeSpecification | TypeSpecification |  |
| category | Category |  |
| {DEL}rules | Rule |  |
| {DEL}attachments | Attachment |  |
| relatedSubjects | RelatedSubject |  |
| {DEL}assignedDepartments | AssignDepartment |  |
| statusTransitions | StatusTransition |  |
