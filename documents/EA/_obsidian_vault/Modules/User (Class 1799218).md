---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799218
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 User

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

When selecting from users anywhere in system, then it's needed to replicatethe most current data from LDAP. 

Entity User is used for storage of known LDAP users in Ticketing (e.g. for displaying full user name UI based on CreatedBy attributes)

## 🔗 Connections (2)

- ← Aggregation: [[UserSetting]]
- ← Aggregation: [[{ADD_CLM206}UserSetting]]

## 📊 Appears In (1 diagrams)

- Logical: Part 2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Email | Varchar2 (100) |  |
| FullName | Varchar2 (255) |  |
| CreationDate | DateTime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| Id | Int (18) Unique |  |
| MobileNumber | Varchar2 (255) |  |
| PhoneNumber | Varchar2 (255) |  |
| UpdateDate | DateTime |  |
| Login | Varchar2 (30) Unique |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| LastLoginDate | DateTime |  |
| FirstName | Varchar2 (50) |  |
| {ADD_v03}Version | Int (18) |  |
| LastName | Varchar2 (50) |  |
| {ADD_v03}ActiveYN | Boolean |  |
