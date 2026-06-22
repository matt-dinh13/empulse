---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions"
domain: "Modules"
element_id: 1836525
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 TicketInfo

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Version 1/Schema definitions

## 🔗 Connections (3)

- ← Dependency: [[TicketInfos]]
- → Usage: [[RelatedSubject (Class 1836537)]]
- → Usage: [[Rule (Class 1836541)]]

## 📊 Appears In (3 diagrams)

- Logical: Schema definitions
- Logical: Ticketing - search for ticket usage
- Logical: Ticketing - Ticket infos

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| department | Department |  |
| description | string |  |
| type | Type |  |
| code | string |  |
| created | dateTime |  |
| createdBy | string |  |
| updateDate | dateTime |  |
| updatedBy | string |  |
| status | Status |  |
| reactionTime | int |  |
| priority | Priority |  |
| resolutionTime | int |  |
| typeSpecification | TypeSpecification |  |
| category | Category |  |
| updatedByFullName | string |  |
| createdFullName | string |  |
| rules | Rule |  |
| relatedSubjects | RelatedSubject |  |
