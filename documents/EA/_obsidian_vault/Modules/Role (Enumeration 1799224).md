---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model"
domain: "Modules"
element_id: 1799224
diagrams: 1
connections: 3
tags:
  - enumeration
  - modules
---

# 📝 Role

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/Logical Data Model

## 📝 Notes

User role used for Ticketing module

## 🔗 Connections (3)

- → Association: [[Privilege (Class 1799230)]]
- ← Association: [[TicketType]]
- ← Association: [[Department (Enumeration 1799235)]]

## 📊 Appears In (1 diagrams)

- Logical: Ticketing setting - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | Text |  |
| Code | Text |  |
| ActiveYN | Boolean |  |
| CreationDate | DateTime |  |
| CreatedBy | User |  |
| LdapUserGroup | Text |  |
| UpdateDate | DateTime |  |
| UpdatedBy | User |  |
