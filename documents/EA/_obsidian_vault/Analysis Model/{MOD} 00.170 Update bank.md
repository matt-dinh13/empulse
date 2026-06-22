---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Access Rights"
domain: "Analysis Model"
element_id: 1300667
diagrams: 7
connections: 16
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD} 00.170 Update bank

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Access Rights

## 📝 Notes

This use case allows user to modify attributes of already existing bank. This functionality is similar to creation of a bank, but attributes which are already known are pre-filled in the modification form at startup.
System records history of performed changes in stored bank data - it's possible to say who changed what and when.

## 🔗 Connections (13)

- → Dependency: [[DD Providers selection]]
- → Realisation: [[REQ#1 Send data for Bank, Bank Branch, Commodity Category, Commodity type from BSL to HSIS]]
- → Realisation: [[REQ 1_ Possibility to use ECS provider]]
- → Realisation: [[REQ #1 – Display a message when bank status or bank branch status is changed to “Disabled]]
- → Realisation: [[REQ 1_ GUI for bank management]]
- → Dependency: [[Automatic change of branch status for disabled bank]]
- → Dependency «use»: [[{ADD} NotificationWS]]
- → Realisation: [[REQ 3_ Direct debit processing structure]]
- → Realisation: [[Req 2_ Ability to use only selected banks for direct debits]]
- → Realisation: [[00.170 Update bank]]
- ← Dependency: [[Update (GUIElement 1761590)]]
- ← Dependency: [[Create_Update bank]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: Bank detail
- Custom: Business rules
- Custom: Create/Update bank
- Custom: PAYM-1309 (CBL-2794) Bank synchronization
- Use Case: Bank Management
- Use Case: Entity Modification Notification - Involved Use Cases
