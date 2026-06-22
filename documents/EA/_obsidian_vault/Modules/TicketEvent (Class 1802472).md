---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/TicketChangedEvent"
domain: "Modules"
element_id: 1802472
diagrams: 1
connections: 11
tags:
  - class
  - modules
---

# 🔷 TicketEvent

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Generated messages/v1.0/TicketChangedEvent

## 🔗 Connections (11)

- ← Dependency: [[{ADD}TicketChangedEvent]]
- → Dependency: [[Department (Class 1802474)]]
- → Dependency: [[User (Class 1801597)]]
- → Dependency: [[User (Class 1801597)]]
- → Dependency: [[Status (Class 1802471)]]
- → Dependency: [[Subject (Class 1802470)]]
- → Dependency: [[Priority (Class 1802469)]]
- → Dependency: [[Type (Class 1802468)]]
- → Dependency: [[TypeSpec]]
- → Dependency: [[Attachment (Class 1802466)]]
- → Dependency: [[Category (Class 1802465)]]

## 📊 Appears In (1 diagrams)

- Logical: TicketChangedEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| attachments | Attachment |  |
| category | Category |  |
| createdBy | User |  |
| creationDate | Int |  |
| department | Department |  |
| description | String |  |
| id | String |  |
| modificationDate | Int |  |
| modifiedBy | User |  |
| priority | Priority |  |
| relatedSubjects | Subject |  |
| resolutionTime | Int |  |
| responseTime | Int |  |
| status | Status |  |
| type | Type |  |
| typeSpec | TypeSpec |  |
