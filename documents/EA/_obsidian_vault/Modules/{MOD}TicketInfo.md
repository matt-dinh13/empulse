---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Responses"
domain: "Modules"
element_id: 1864848
diagrams: 2
connections: 11
tags:
  - class
  - modules
---

# 🔷 {MOD}TicketInfo

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Operations/Responses

## 📝 Notes

Date and time when was ticket created (ISO-8601).

## 🔗 Connections (11)

- → Dependency «use»: [[{ADD}Queue (Class 1836496)]]
- → Dependency «use»: [[Department (Class 1864846)]]
- → Dependency: [[Rule (Class 1864842)]]
- → Dependency: [[{ADD}Transition]]
- → Dependency «use»: [[Type (Class 1864839)]]
- → Usage: [[Priority (Class 1864838)]]
- → Dependency «use»: [[Status (Class 1864834)]]
- → Dependency «use»: [[{ADD}User (Class 1864832)]]
- → Dependency «use»: [[Category (Class 1864825)]]
- → Usage: [[RelatedSubject (Class 1864823)]]
- ← Dependency: [[TicketInfosV2]]

## 📊 Appears In (2 diagrams)

- Logical: ResponsesV2
- Logical: Ticketing - Ticket infos v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| category | Category |  |
| type | Type |  |
| department | Department |  |
| status | Status |  |
| priority | Priority |  |
| createdBy | string |  |
| updatedBy | string |  |
| originatedBy | string |  |
| creationDate | dateTime |  |
| updateDate | dateTime |  |
| relatedSubjects | RelatedSubject |  |
| transitions | Transition |  |
| queues | Queue |  |
| assignedTo | {ADD}User |  |
| rules | Rule |  |
