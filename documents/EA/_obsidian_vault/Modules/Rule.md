---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799200
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 Rule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

Entity presents rules which defines what statuses can employee of specific department set to specific ticket type, if the comments is required and if ticket should be reassigned after ticket state change.

## 🔗 Connections (7)

- → Association: [[Action label]]
- → Dependency: [[Department (Enumeration 1799202)]]
- → Dependency: [[Status (Enumeration 1799211)]]
- → Dependency: [[Status (Enumeration 1799211)]]
- → Dependency: [[Department (Enumeration 1799202)]]
- → Dependency: [[CommentPreference]]
- → Association: [[Flow]]

## 📊 Appears In (1 diagrams)

- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ActionLabel | Varchar2 (30) |  |
| CommentPreference | Varchar2 (20) |  |
| FromDepartment | Varchar2 (30) |  |
| CheckSolver | Boolean |  |
| CreationDate | DateTime |  |
| Id | Int (18) Unique |  |
| ToDepartment | Varchar2 (30) |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| StateFrom | Varchar2 (20) |  |
| StateTo | Varchar2 (20) |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| {ADD_v03}Version | Int (18) |  |
| Flow | Varchar2 (30) |  |
| {ADD_v03}ActiveYN | Boolean |  |
