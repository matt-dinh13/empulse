---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Access Rights"
domain: "Modules"
element_id: 1858666
diagrams: 4
connections: 10
tags:
  - usecase
  - modules
---

# 🎯 {DEL}08.180 Activate Service version manually

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Access Rights

## 📝 Notes

This use case is intended for activation of inactive service version.
If service validation is OK then user can activate service version immediately or on required date and time.
After activation the service can be assigned to products and used for preparation of product offers.

## 🔗 Connections (10)

- ← Realisation: [[Activate (GUIElement 1516821)]]
- ← Realisation: [[Activate (GUIElement 1596828)]]
- ← Realisation: [[Activate (GUIElement 1831552)]]
- → Realisation: [[08.180 Activate Service version]]
- → Dependency: [[{ADD} NotificationWS]]
- → Realisation: [[08.180 Activate Service version manually]]
- → Dependency: [[Version activation procedure]]
- → Dependency: [[{MOD}Service activation validation rules]]
- ← Realisation: [[Activate (GUIElement 1867458)]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Show Service
- Use Case: Entity Modification Notification - Involved Use Cases
- Use Case: Manage Services
