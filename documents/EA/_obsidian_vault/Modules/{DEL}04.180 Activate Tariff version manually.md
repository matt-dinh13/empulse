---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Access Rights"
domain: "Modules"
element_id: 1858638
diagrams: 4
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.180 Activate Tariff version manually

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Access Rights

## 📝 Notes

This use case is intended for activation of inactive tariff version.
If tariff validation is OK then user can activate tariff version immediately or on required date and time.
After activation the tariff can be assigned to products and services and used for calculation of corresponding types of tariff items.

## 🔗 Connections (7)

- ← Realisation: [[Activate (GUIElement 1831552)]]
- → Realisation: [[04.180 Activate Tariff version manually]]
- → Dependency: [[{ADD} NotificationWS]]
- → Dependency: [[Version activation procedure]]
- → Dependency: [[{MOD}Tariff activation validation rules]]
- → Realisation: [[04.180 Activate Tariff version]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Show Tariff
- Use Case: Entity Modification Notification - Involved Use Cases
- Use Case: Tariffs
