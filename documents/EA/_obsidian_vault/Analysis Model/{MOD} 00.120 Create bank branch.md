---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Access Rights"
domain: "Analysis Model"
element_id: 1300659
diagrams: 7
connections: 16
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD} 00.120 Create bank branch

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Access Rights

## 📝 Notes

This use case allows user to create a new bank branch in Homer Select. Bank branch is created with attributes inserted by user and connected to selected bank. Newly created bank branch can be used immediately by other Homer Select use cases.

Bank branch is always created as a part of an existing bank. It's not possible to create bank branch which isn't part of any bank. System records information about creation of bank branch - it's possible to say who and when created this bank branch.

## 🔗 Connections (12)

- → Dependency «use»: [[{ADD} NotificationWS]]
- → Dependency: [[Region&District relation and selection]]
- → Dependency: [[No active branches for disabled bank]]
- → Realisation: [[REQ 2_ VN Bank Branch Structure]]
- → Realisation: [[REQ 1_ Mandatory bank branch code]]
- → Realisation: [[REQ#1 Send data for Bank, Bank Branch, Commodity Category, Commodity type from BSL to HSIS]]
- → Realisation: [[REQ 1_ GUI for bank management]]
- → Realisation: [[00.120 Create bank branch]]
- → Realisation: [[REQ 2_ Indian validations for bank branches]]
- ← Dependency: [[Create_Update bank branch]]
- ← Dependency: [[New branch]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: Bank detail
- Custom: Business rules
- Custom: Create/Update bank branch
- Custom: PAYM-1309 (CBL-2794) Bank synchronization
- Use Case: Bank Management
- Use Case: Entity Modification Notification - Involved Use Cases
