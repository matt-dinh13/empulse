---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Access Rights"
domain: "Analysis Model"
element_id: 1300664
diagrams: 8
connections: 17
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD} 00.130 Update bank branch

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Access Rights

## 📝 Notes

This use case allows user to modify attributes of already existing bank branch. This functionality is similar to creation of a bank branch, but attributes which are already known are pre-filled in the modification form at startup.
System records history of performed changes in stored bank branch data - it's possible to say who changed what and when.

## 🔗 Connections (14)

- → Realisation: [[REQ 1_ GUI for bank management]]
- → Realisation: [[REQ #1 – Display a message when bank status or bank branch status is changed to “Disabled]]
- → Realisation: [[00.130 Update bank branch]]
- → Dependency «use»: [[{ADD} NotificationWS]]
- → Dependency: [[No active branches for disabled bank]]
- → Realisation: [[REQ#1 Send data for Bank, Bank Branch, Commodity Category, Commodity type from BSL to HSIS]]
- → Realisation: [[REQ 2_ VN Bank Branch Structure]]
- → Dependency: [[Region&District relation and selection]]
- → Realisation: [[REQ 1_ Mandatory bank branch code]]
- → Realisation: [[REQ 2_ Indian validations for bank branches]]
- ← Dependency: [[List of bank branches]]
- ← Dependency: [[Update branch]]
- ← Dependency: [[Create_Update bank branch]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (8 diagrams)

- Custom: Access Rights
- Custom: Bank branch detail
- Custom: Bank detail
- Custom: Business rules
- Custom: Create/Update bank branch
- Custom: PAYM-1309 (CBL-2794) Bank synchronization
- Use Case: Bank Management
- Use Case: Entity Modification Notification - Involved Use Cases
