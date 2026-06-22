---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1328310
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}GetBankAccountResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD CBL-4414 PAYM-1613 /}

## 🔗 Connections (3)

- → Dependency: [[{ADD}CreateBankAccountDataDto]]
- → Dependency: [[{ADD}BankAccountResponseStatusDto]]
- ← Dependency: [[{ADD} BankAccountsWS]]

## 📊 Appears In (1 diagrams)

- Logical: BankAccountsWS.getBankAccount()

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountData | CreateBankAccountDataDto |  |
| status | VerifyBankAccountDataExternallyResultDto |  |
| errorMessage | string |  |
