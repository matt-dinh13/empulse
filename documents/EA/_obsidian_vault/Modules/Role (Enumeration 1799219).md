---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799219
diagrams: 1
connections: 3
tags:
  - enumeration
  - modules
---

# 📝 Role

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

User role used for Ticketing module

## 🔗 Connections (3)

- ← Association: [[Department (Enumeration 1799202)]]
- → Association: [[Privilege (Class 1799197)]]
- → Association: [[Privilege (Class 1799197)]]

## 📊 Appears In (1 diagrams)

- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Value | Varchar2 (255) |  |
| Code | Varchar2 (30) Unique |  |
| ActiveYN | Boolean |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| LdapUserGroup | Varchar2 (30) |  |
| UpdateDate | DateTime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| {ADD_v03}Version | Int (18) |  |
