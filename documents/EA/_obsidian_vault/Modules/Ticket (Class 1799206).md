---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799206
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 Ticket

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

Holds main information about the ticket
Relation to Contract Package added.
Caution - Modeled as relation - not seen as property / attribute

## 🔗 Connections (7)

- → Association: [[Status (Enumeration 1799211)]]
- → Association: [[Type (Enumeration 1799214)]]
- → Association: [[Department (Enumeration 1799202)]]
- ← Aggregation: [[StatusTransition]]
- ← Aggregation: [[Attachment]]
- ← Aggregation: [[RelatedSubject (Class 1799196)]]
- → Association: [[Priority]]

## 📊 Appears In (1 diagrams)

- Logical: Part 1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Varchar2 (60) Unique |  |
| CreationDate | Datetime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| UpdateDate | Datetime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| Id | Int (18) Unique |  |
| ResolutionTime | Number (18,0) |  |
| ResponseTime | Number (18,0) |  |
| Status | Varchar2 (20) |  |
| Type | Varchar2 (30) |  |
| Department | Varchar2 (30) |  |
| Description | Varchar2 (2047) |  |
| {ADD_v03}Version | Int (18) |  |
