---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Logical Data Model"
domain: "Analysis Model"
element_id: 1761500
diagrams: 5
connections: 20
tags:
  - class
  - analysis-model
---

# 🔷 Bank

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/Logical Data Model

## 📝 Notes

Contains a list of all banks

## 🔗 Connections (20)

- ← Dependency: [[Bank name (GUIElement 1237933)]]
- ← Association: [[Due Date Algorithm Parameters]]
- ← Dependency: [[{ADD} GetBankDataResponse]]
- ← Dependency: [[{ADD} GetBankDataResponse]]
- ← Dependency: [[{ADD} GetBankDataResponse]]
- ← Dependency: [[{ADD} GetBankDataResponse]]
- ← Dependency: [[{ADD} GetBankDataResponse]]
- ← Dependency: [[Bank name (GUIElement 1747122)]]
- ← Dependency: [[Bank name (GUIElement 1747199)]]
- → Dependency: [[Custom Data Definition (Class 1243901)]]
- → Dependency: [[Custom Data Definition (Class 1243901)]]
- → Dependency «use»: [[Bank Status]]
- → Association: [[Bank Branch (Class 1761502)]]
- → Association: [[Bank (Class 1761500)]]
- ← Association: [[Bank (Class 1761500)]]
- → Dependency: [[Direct Debit Type]]
- ← Aggregation: [[Bank Technical Account]]
- ← Association: [[DDM (Class 1869699)]]
- ← Dependency: [[DDM Documents for Banks]]
- ← Dependency: [[Bank name (GUIElement 1873807)]]

## 📊 Appears In (5 diagrams)

- Logical: Bank Management
- Logical: BankManagementWS
- Logical: Common - Bank account
- Logical: Contract - DDM
- Logical: SNM Bank Account Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | Text (255) |  |
| Code | Text (11) |  |
| Status | Bank Status |  |
| DD Type | Direct Debit Type |  |
| Synchronization code | Text (20) |  |
| DD Support | Boolean | true |
| Supplementary code | Text (15) |  |
| Available For GBA | boolean | true |
| General account number validation | Custom Data Definition |  |
| DD account number validation | Custom Data Definition |  |
| OnlineDisbursement | Boolean |  |
| {ADD}EMandateSupport | Boolean |  |
