---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799213
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD_CLM206}MistakeRule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

MistakeRule defines allowed combinations of TicketType, DocumentType (optional), Department and TicketPriority for mistake recording (i.e. creation mistake Ticket) on checked credit documentation in registration process or receiving contract package process.

Contract registration mistake setting
It means, it defines which TicketTypes (i.e. mistake types) can be recorded on various document types, to which department are new created mistakes (mistake types) assigned and if the recorded mistakes (created documents) are critical - if the ticket must be closed/canceled for contract to be registered.

Allowed combination of the mentioned items has to be unique!

## 🔗 Connections (3)

- → Association: [[Type (Enumeration 1799214)]]
- → Association: [[Department (Enumeration 1799202)]]
- → Association: [[Priority]]

## 📊 Appears In (1 diagrams)

- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ActiveYN | Boolean |  |
| Description | Varchar2 (255) |  |
| DocumentTypeCode | Varchar2 (30) |  |
| RuleType | Varchar2 (30) |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| ToDeparment | Varchar2 (30) |  |
| TicketType | Varchar2 (30) |  |
| Id | Int (18) |  |
| Version | Int (18) |  |
| Priority | Varchar2 (30) |  |
