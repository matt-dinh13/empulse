---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1328330
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}CreateBankAccountResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD CBL-4414 PAYM-1613 /}

## 🔗 Connections (2)

- → Dependency: [[{ADD}BankAccountResponseStatusDto]]
- ← Dependency: [[{ADD} BankAccountsWS]]

## 📊 Appears In (2 diagrams)

- Logical: BankAccountsWS.createBankAccount()
- Logical: BankAccountsWS.verifyBankAccountDataExternally()

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountCode | string |  |
| status | VerifyBankAccountDataExternallyResultDto |  |
| errorMessage | string |  |
