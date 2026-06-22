---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Access Rights"
domain: "Modules"
element_id: 1865220
diagrams: 5
connections: 13
tags:
  - usecase
  - modules
---

# 🎯 {MOD}POST services

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Access Rights

## 📝 Notes

Creates new service with version number = 1. If version status in request is ACTIVE then service is activated instantly. If version status in request is FOR_ACTIVATION then planned activation date must be filled in and service is activated on this date.

## 🔗 Connections (13)

- → Realisation: [[REQ#1 Create a tab in Service detail for managing sales description]]
- → Realisation: [[08.120 Create Service]]
- → Realisation: [[08.180 Activate Service version]]
- → Realisation: [[08.130 Create Service version]]
- → Dependency: [[{MOD}Service activation validation rules]]
- → Dependency: [[Service - validation]]
- → Dependency: [[Version number]]
- → Dependency: [[{ADD}User check for activation]]
- → Realisation: [[08.150 Set main Service properties]]
- → Realisation: [[08.180 Activate Service version manually]]
- → Dependency: [[Application events (Interface 1858728)]]
- ← Association: [[External Component]]
- ← Realisation: [[services (Class 1881079)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: One Level Requirement Hierarchy
- Logical: Service API
- Use Case: Notification in Use Cases
- Use Case: Use Case
