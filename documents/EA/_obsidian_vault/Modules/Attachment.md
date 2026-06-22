---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799199
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Attachment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

Ticket composite entity which keeps reference to ticket attachments (Document)

## 🔗 Connections (1)

- → Aggregation: [[Ticket (Class 1799206)]]

## 📊 Appears In (1 diagrams)

- Logical: Part 1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Comment | Varchar2 (2047) |  |
| ExternalId | {MOD_CLM189}Varchar2 (36){/MOD} |  |
| FileName | Varchar2 (255) |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| TicketId | Int (18) |  |
| UpdateDate | DateTime |  |
| Id | Int (18) Unique |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| {ADD_v03}Version | Int (18) |  |
