---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Logical Data Model"
domain: "Analysis Model"
element_id: 1761502
diagrams: 9
connections: 20
tags:
  - class
  - analysis-model
---

# 🔷 Bank Branch

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Logical Data Model

## 📝 Notes

Contains a list of all bank branches

## 🔗 Connections (20)

- ← Dependency: [[Bank account type]]
- ← Dependency: [[{ADD} GetBankBranchDataResponse]]
- ← Dependency: [[{ADD} GetBankBranchDataResponse]]
- ← Dependency: [[{ADD} GetBankBranchDataResponse]]
- ← Dependency: [[{ADD} GetBankBranchDataResponse]]
- ← Dependency: [[{ADD} GetBankBranchDataResponse]]
- ← Association: [[Bank Account (Class 1627830)]]
- ← Dependency: [[MICR (GUIElement 1747145)]]
- ← Dependency: [[District (GUIElement 1747142)]]
- ← Dependency: [[State (GUIElement 1747139)]]
- ← Dependency: [[Bank branch (GUIElement 1747127)]]
- ← Dependency: [[Bank branch (GUIElement 1747202)]]
- ← Aggregation: [[Bank Branch Contact]]
- → Dependency «use»: [[Bank Status]]
- → Association: [[Bank Branch Address]]
- ← Association: [[Bank (Class 1761500)]]
- ← Association: [[TempAppl Bank Account]]
- ← Dependency: [[Request bank account]]
- ← Dependency: [[DDM Confirmation Result Issues]]
- ← Dependency: [[Bank branch name (GUIElement 1873808)]]

## 📊 Appears In (9 diagrams)

- Logical: Bank Management
- Logical: BankManagementWS
- Logical: Common - Bank account
- Logical: Contract - DDM
- Logical: Contract Management
- Logical: Refunds domain model
- Logical: SNM Bank Account Synchronization
- Logical: Temporary Application - detail
- Logical: Temporary Application - Payment Information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | Text (255) |  |
| Code | Short text (30) |  |
| MICR | Short text (30) |  |
| Status | Bank Status |  |
| Address | Text (255) |  |
| Synchronization code | Text (20) |  |
| Is Headquarters | Boolean |  |
| {DEL}eMandate Support | Boolean | false |
| Region Code | KeyOrValue Type |  |
| District Code | KeyOrValue Type |  |
