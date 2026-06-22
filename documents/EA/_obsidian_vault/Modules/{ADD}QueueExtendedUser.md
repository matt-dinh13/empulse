---
type: Class
stereotype: "REST Response"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/queues/assignUserIntoQueue"
domain: "Modules"
element_id: 1864843
diagrams: 4
connections: 2
tags:
  - class
  - modules
---

# 🔷 {ADD}QueueExtendedUser

> **Type**: Class · **Stereotype**: «REST Response»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/queues/assignUserIntoQueue

## 📝 Notes

Detail of user assigned to a queue

## 🔗 Connections (2)

- ← Dependency: [[_queues_{queueCode}_user_{userLogin}]]
- ← Dependency: [[{ADD}QueueExtended]]

## 📊 Appears In (4 diagrams)

- Logical: assignUserIntoQueue
- Logical: getQueue
- Logical: ResponsesV2
- Logical: unassignUserFromQueue

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| uid | string |  |
| commonName | string |  |
| ldap | boolean |  |
