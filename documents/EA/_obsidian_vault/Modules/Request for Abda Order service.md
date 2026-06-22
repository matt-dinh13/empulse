---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/ABDA/Interface Provided"
domain: "Modules"
element_id: 1842204
diagrams: 2
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 Request for Abda Order service

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/ABDA/Interface Provided

## 📝 Notes

This use case presents a method for receiving a request for "Abda Order". 
It is used by Zeebe process which prepare all inputs and call this internal API to download file content and send request to public ABDA service.

API call address:
POST ../abda-service/rest/v1/order

## 🔗 Connections (4)

- → Realisation: [[{ADD}16.010 Request for a loan transaction service]]
- → Dependency: [[ABDA insurance public API]]
- → Dependency: [[CAB - getting File Content from documents]]
- ← Usage: [[abda-service]]

## 📊 Appears In (2 diagrams)

- Logical: REST
- Use Case: Analytical Model
