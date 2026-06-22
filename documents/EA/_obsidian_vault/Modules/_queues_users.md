---
type: Interface
stereotype: "REST Path"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API"
domain: "Modules"
element_id: 1836275
diagrams: 1
connections: 1
tags:
  - interface
  - modules
---

# 🔶 /queues/users

> **Type**: Interface · **Stereotype**: «REST Path»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API

## 📝 Notes

{ADD CLM-5888/}

Auxiliary endpoint (hidden from Swagger representation) to fetch all potential users who can work with queues. It gets them in 3 steps:

	
- gets all roles for privilege UC10_017
	
- gets all user logins from UMC based on roles
	
- gets all users from TCK DB based on logins


Used for suggesting names of users in the multi-edit {ADD}Users with permission (TCK Managed) form as user types in it.

## 🔗 Connections (1)

- → Nesting «path»: [[_queues]]

## 📊 Appears In (1 diagrams)

- Component: {MOD}Ticketing API
