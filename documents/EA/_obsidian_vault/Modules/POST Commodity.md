---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity/Access Rights"
domain: "Modules"
element_id: 1878721
diagrams: 4
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 POST Commodity

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity/Access Rights

## 📝 Notes

Creates new commodity.

## 🔗 Connections (6)

- ← Realisation: [[commodites]]
- ← Association: [[External System (Actor 1854672)]]
- → Dependency: [[{MOD}Commodity - validation]]
- → Dependency: [[Application events (Interface 1844581)]]
- → Dependency: [[Kafka notification]]
- → Realisation: [[01.694 Create commodity data from external systems]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Commodity API
- Use Case: Notification in Use Cases
- Use Case: Use Case
