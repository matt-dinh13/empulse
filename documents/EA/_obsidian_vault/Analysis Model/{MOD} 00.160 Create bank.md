---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Access Rights"
domain: "Analysis Model"
element_id: 1300661
diagrams: 7
connections: 15
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD} 00.160 Create bank

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Access Rights

## 📝 Notes

This use case allows user to create a new bank in Homer Select. Bank is created with attributes inserted by user and can be used immediately by other Homer Select use cases. 
Connection between banks from direct debit processing point of view is also set during creation of a new bank.

System records information about creation of bank - it's possible to say who and when created this bank.

## 🔗 Connections (11)

- → Dependency: [[DD Providers selection]]
- → Dependency «use»: [[{ADD} NotificationWS]]
- → Realisation: [[REQ#1 Send data for Bank, Bank Branch, Commodity Category, Commodity type from BSL to HSIS]]
- → Realisation: [[REQ 3_ Direct debit processing structure]]
- → Realisation: [[REQ 1_ Possibility to use ECS provider]]
- → Realisation: [[REQ 1_ GUI for bank management]]
- → Realisation: [[00.160 Create bank]]
- → Realisation: [[Req 2_ Ability to use only selected banks for direct debits]]
- ← Dependency: [[Create (GUIElement 1761586)]]
- ← Dependency: [[Create_Update bank]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: Business rules
- Custom: Create/Update bank
- Custom: Find bank
- Custom: PAYM-1309 (CBL-2794) Bank synchronization
- Use Case: Bank Management
- Use Case: Entity Modification Notification - Involved Use Cases
