---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799255
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}Queue

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

{ADD CLM-5246/}

List of possible ticket queues

## 🔗 Connections (2)

- ← Association: [[{ADD}Role2Queue]]
- ← Association: [[{MOD}Ticket2Queue]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
| ActiveYN | Boolean |  |
| Priority | Number (10,0) |  |
| Version | Number (18,0) |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
