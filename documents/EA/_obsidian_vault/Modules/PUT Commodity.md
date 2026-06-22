---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity/Access Rights"
domain: "Modules"
element_id: 1878723
diagrams: 4
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 PUT Commodity

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity/Access Rights

## 📝 Notes

Update existing commodity.

## 🔗 Connections (7)

- ← Realisation: [[commodites]]
- ← Association: [[External System (Actor 1854672)]]
- → Dependency: [[Application events (Interface 1844581)]]
- → Dependency: [[{MOD}Commodity - validation]]
- → Dependency: [[Kafka notification]]
- → Realisation: [[01.692 Update commodity data from external systems]]
- → Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Commodity API
- Use Case: Notification in Use Cases
- Use Case: Use Case
