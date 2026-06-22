---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Access Rights"
domain: "Modules"
element_id: 1865222
diagrams: 4
connections: 11
tags:
  - usecase
  - modules
---

# 🎯 {MOD}PUT services

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Access Rights

## 📝 Notes

Updates given services.

## 🔗 Connections (11)

- → Realisation: [[08.130 Create Service version]]
- → Dependency: [[{ADD}User check for activation]]
- → Dependency: [[Application events (Interface 1858728)]]
- → Dependency: [[{MOD}Service activation validation rules]]
- → Realisation: [[08.180 Activate Service version manually]]
- → Dependency: [[Version number]]
- → Realisation: [[08.180 Activate Service version]]
- → Dependency: [[Service - validation]]
- → Realisation: [[08.150 Set main Service properties]]
- ← Association: [[External Component]]
- ← Realisation: [[services (Class 1881079)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Service API
- Use Case: Notification in Use Cases
- Use Case: Use Case
