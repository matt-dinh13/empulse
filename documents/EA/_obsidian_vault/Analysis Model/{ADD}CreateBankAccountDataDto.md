---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1435488
diagrams: 4
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CreateBankAccountDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD CBL-3607 PAYM-1428 /}

## 🔗 Connections (5)

- ← Dependency: [[{ADD}UpdateBankAccountRequest]]
- ← Dependency: [[{ADD}CreateBankAccountRequest]]
- ← Dependency: [[{ADD}GetBankAccountResponse]]
- → Dependency: [[{ADD}HolderTypeDto]]
- → Dependency: [[{ADD}BankAccountTypeDto]]

## 📊 Appears In (4 diagrams)

- Logical: BankAccountsWS.createBankAccount()
- Logical: BankAccountsWS.getBankAccount()
- Logical: BankAccountsWS.updateBankAccount()
- Logical: BankAccountsWS.verifyBankAccountDataExternally()

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | string |  |
| accountType | BankAccountTypeDto |  |
| holderName | string |  |
| holderType | HolderTypeDto |  |
| bankBranchCode | string |  |
