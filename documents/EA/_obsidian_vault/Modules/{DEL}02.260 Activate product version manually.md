---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/Access Rights"
domain: "Modules"
element_id: 1872108
diagrams: 4
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {DEL}02.260 Activate product version manually

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/Access Rights

## 📝 Notes

This use case is intended for activation of inactive product version.
If product validation is OK then user can activate product version immediately or on required date.
After activation the product can be assigned to salesrooms and used for preparation of product offers.

## 🔗 Connections (8)

- ← Realisation: [[Activate (GUIElement 1872104)]]
- → Dependency: [[{ADD} NotificationWS]]
- → Dependency: [[Version activation procedure]]
- → Realisation: [[02.260 Activate product version manually]]
- → Dependency: [[{MOD}Product activation validation rules]]
- ← Dependency: [[{DEL}02.120 Bulk activate product version (UseCase 1872122)]]
- → Realisation: [[02.260 Activate product version]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Show product
- Use Case: Entity Modification Notification - Involved Use Cases
- Use Case: Manage Product
