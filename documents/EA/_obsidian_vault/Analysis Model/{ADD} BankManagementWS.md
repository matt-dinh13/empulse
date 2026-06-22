---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank Management"
domain: "Analysis Model"
element_id: 1557361
diagrams: 3
connections: 16
tags:
  - interface
  - analysis-model
---

# 🔶 {ADD} BankManagementWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank Management

## 📝 Notes

{ADD CBL-9395 PAYM-3032}

Interface for data synchronization for Banks and their sub-entities (Bank Branch, etc.)

## 🔗 Connections (14)

- → Dependency: [[{ADD}00.191 Bank Import]]
- → Dependency: [[{ADD} GetBankDataResponse]]
- → Dependency: [[{ADD}00.201 Bank Branch Import]]
- → Dependency: [[BankImportRequest]]
- → Dependency: [[{ADD} GetBankBranchDataRequest]]
- → Dependency: [[BankBranchImportRequest]]
- → Dependency: [[BankBranchImportResponse]]
- → Dependency: [[BankBranchImportError]]
- → Dependency: [[{ADD} GetBankBranchDataResponse]]
- → Dependency: [[BankImportError]]
- → Dependency: [[BankImportResponse]]
- → Dependency: [[{ADD} GetBankDataRequest]]
- ← Realisation: [[{ADD} 00.190 Provide Bank Data (UseCase 1861967)]]
- ← Realisation: [[{ADD} 00.200 Provide Bank Branch Data (UseCase 1861960)]]

## 📊 Appears In (3 diagrams)

- Logical: Bank Management - ImportBankBranch
- Logical: BankManagementWS
- Logical: BankManagementWS - BankImport
