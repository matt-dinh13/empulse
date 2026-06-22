---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Bank Account/User Interface"
domain: "Analysis Model"
element_id: 1309192
diagrams: 4
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}09.120 Create SN bank account

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Bank Account/User Interface

## 📝 Notes

This use case makes user able to create new bank account for any partner or salesroom. Bank account has to be specified to make any financial transaction between partner and HCI.
Notice: Bank account structure is country specific.

## 🔗 Connections (5)

- → UseCase «include»: [[09.240 Show salesroom (UseCase 1387392)]]
- → Realisation: [[09.120 Create bank account]]
- ← Dependency: [[Create Bank Account (GUIElement 1309308)]]
- ← Dependency: [[Create_Update bank account]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Create/Update bank account
- Custom: SN Bank Account - Access Rights
- Custom: tab Bank Accounts
- Use Case: Manage SN Bank Accounts
