---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Access Rights"
domain: "Modules"
element_id: 1858739
diagrams: 5
connections: 10
tags:
  - usecase
  - modules
---

# 🎯 {DEL}02.440 Update commodity type

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Definition/Access Rights

## 📝 Notes

Use case is intended for updating of existing commodity type.

## 🔗 Connections (8)

- ← Realisation: [[Create commodity type]]
- ← Realisation: [[List of Commodity types]]
- ← Association: [[User (Actor 1854675)]]
- → UseCase «include»: [[{DEL}02.411 Find commodity types]]
- → Realisation: [[REQ#1 Send data for Bank, Bank Branch, Commodity Category, Commodity type from BSL to HSIS]]
- → Realisation: [[02.440 Update commodity type]]
- → Dependency «use»: [[{ADD} NotificationWS]]
- ← UseCase «include»: [[{DEL}02.420 Create commodity type]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights - GUI
- Custom: List of Commodity Types
- Custom: Set Commodity Type
- Use Case: Entity Modification Notification - Involved Use Cases
- Use Case: Manage Commodity Types and Categories by GUI
