---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-11956 (CLM-4075) Complaints Data Data to Hadoop - TCK"
domain: "Modules"
element_id: 1865727
diagrams: 11
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {MOD}10.022 Create ticket service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-11956 (CLM-4075) Complaints Data Data to Hadoop - TCK

## 📝 Notes

This use case describes a function for creation of a general ticket and its assigning to chosen department.

## 🔗 Connections (9)

- ← Dependency: [[Tickets (Class 1836080)]]
- → Dependency: [[Generate Ticket changed notification]]
- → Dependency: [[Create ticket service validations]]
- → Dependency: [[Generate Related subject notification]]
- → Dependency: [[{ADD}Get salesroom from contract]]
- → Dependency: [[Generate notification about Ticket status change]]
- ← UseCase «include»: [[10.020 Create ticket manually (UseCase 1865726)]]
- ← Dependency: [[10.080 Create mistake ticket (UseCase 1865686)]]
- ← UseCase «include»: [[10.052 Revise ticket manually]]

## 📊 Appears In (11 diagrams)

- Custom: CBL-11956 (CLM-4075) Complaints Data Data to Hadoop - TCK
- Custom: CBL-29392 (CLM-7205) Ticket search by contract salesroom code
- Custom: CBL-6153 (CLM-3712) Registration queue - TCK - Implement Kafka RelatedSubjectNotification
- Custom: CLM-4457 - TCK - create job for cleaning ticket event outbox table
- Custom: Validation rules
- Logical: createTicket
- Logical: Ticketing - Create mistake ticket API usage
- Logical: Ticketing - Create ticket overview (with TypeSpecification)
- Logical: TicketManagement - Create ticket overview
- Use Case: Ticket creation - Use Case Model
- Use Case: Ticketing - involved use cases
