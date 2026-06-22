---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1798521
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 User

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

When selecting from users anywhere in system, then it's needed to replicate the most current data from LDAP. 

Entity User is used for storage of known LDAP users in Ticketing (e.g. for displaying full user name UI based on CreatedBy attributes)

## 🔗 Connections (1)

- ← Aggregation: [[UserSetting]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Email | Email |  |
| FirstName | Text |  |
| FullName | Text |  |
| CreationDate | DateTime |  |
| LastName | Text |  |
| CreatedBy | User |  |
| MobileNumber | Text |  |
| PhoneNumber | Text |  |
| UpdateDate | DateTime |  |
| Login | Text |  |
| UpdatedBy | User |  |
| LastLoginDate | DateTime |  |
