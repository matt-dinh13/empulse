---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1435475
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetBankAccountByCUIDDataDto

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD CBL-4827 PAYM-1828 /}

## 🔗 Connections (2)

- → Dependency: [[AccountTypeDto (Enumeration 1710623)]]
- ← Dependency: [[getBankAccountByCUIDResponse]]

## 📊 Appears In (1 diagrams)

- Logical: BankAccountsWS.getBankAccountByCUID

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountHolderName | string |  |
| accountNumber | string |  |
| accountType | AccountTypeDto |  |
| bankBranchSyncCode | string |  |
| bankName | string |  |
| district | string |  |
| MICR | string |  |
| state | string |  |
| bankBranchName | string |  |
