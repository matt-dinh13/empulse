---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/BankManagementRestAPI"
domain: "Analysis Model"
element_id: 1862058
diagrams: 6
connections: 18
tags:
  - interface
  - analysis-model
---

# 🔶 BankManagementRestAPIv3

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/BankManagementRestAPI

## 📝 Notes

{ADD CBL-16033}
Bank management rest API.

## 🔗 Connections (13)

- → Dependency: [[UpdateBankDataRequest]]
- → Dependency: [[validateBankAccountForHsisResponse]]
- → Dependency: [[{ADD}00.193 Get Bank Branch data via Rest API]]
- → Dependency: [[{ADD}00.192 Get Bank data via Rest API]]
- → Dependency: [[GetBankBranchDataRequest]]
- → Realisation: [[00.194 Validate Bank Account for HSIS]]
- → Dependency: [[GetBankDataRequest]]
- → Dependency: [[GetBankBranchDataResponse]]
- → Dependency: [[validateBankAccountForHsisRequest]]
- → Dependency: [[CreateBankDataResponse]]
- → Dependency: [[CreateBankDataRequest]]
- → Dependency: [[GetBankDataResponse]]
- → Dependency: [[UpdateBankDataResponse]]

## 📊 Appears In (6 diagrams)

- Logical: BankManagementRestAPI
- Logical: BankManagementRestAPI - Create Bank Data
- Logical: BankManagementRestAPI - Get Bank Branch Data
- Logical: BankManagementRestAPI - Get Bank Data
- Logical: BankManagementRestAPI - Update Bank Data
- Logical: BankManagementRestAPI - valiadteBankAccountForHsis
