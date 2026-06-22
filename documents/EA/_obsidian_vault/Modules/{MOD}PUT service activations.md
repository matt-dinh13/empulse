---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Access Rights"
domain: "Modules"
element_id: 1865217
diagrams: 3
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {MOD}PUT service activations

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Access Rights

## 📝 Notes

Activates or plans activation of given services. Only inactive and for activation versions can be activated.

## 🔗 Connections (6)

- → Dependency: [[Service - validation]]
- → Dependency: [[{ADD}User check for activation]]
- → Realisation: [[08.180 Activate Service version]]
- → Realisation: [[08.180 Activate Service version manually]]
- ← Association: [[External Component]]
- ← Realisation: [[service-activations]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Service API
- Use Case: Use Case
