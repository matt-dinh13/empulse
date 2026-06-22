---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1435491
diagrams: 4
connections: 4
tags:
  - enumeration
  - analysis-model
---

# 📝 {ADD}BankAccountResponseStatusDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD CBL-3607 PAYM-1428 /}

## 🔗 Connections (4)

- ← Dependency: [[{ADD}CreateBankAccountResponse]]
- ← Dependency: [[{ADD}UpdateBankAccountResponse]]
- ← Dependency: [[{ADD}GetBankAccountResponse]]
- ← Dependency: [[getBankAccountByCUIDResponse]]

## 📊 Appears In (4 diagrams)

- Logical: BankAccountsWS.createBankAccount()
- Logical: BankAccountsWS.getBankAccount()
- Logical: BankAccountsWS.updateBankAccount()
- Logical: BankAccountsWS.verifyBankAccountDataExternally()

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ERROR |  |  |
| OK |  |  |
