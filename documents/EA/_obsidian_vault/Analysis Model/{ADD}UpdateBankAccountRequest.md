---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1328308
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}UpdateBankAccountRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD CBL-4414 PAYM-1613 /}

## 🔗 Connections (2)

- → Dependency: [[{ADD}CreateBankAccountDataDto]]
- ← Dependency: [[{ADD} BankAccountsWS]]

## 📊 Appears In (1 diagrams)

- Logical: BankAccountsWS.updateBankAccount()

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| newBankAccountData | BankAccountDataDto |  |
| bankAccountCode | string |  |
