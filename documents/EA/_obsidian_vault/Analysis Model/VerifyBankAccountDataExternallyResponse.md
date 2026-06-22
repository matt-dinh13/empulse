---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1328332
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 VerifyBankAccountDataExternallyResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD PAYM-1214 CBL-1767 /}

## 🔗 Connections (2)

- → Dependency: [[VerifyBankAccountDataExternallyResultDto]]
- ← Dependency: [[{ADD} BankAccountsWS]]

## 📊 Appears In (1 diagrams)

- Logical: BankAccountsWS.verifyBankAccountDataExternally()

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountHolderName | string |  |
| result | VerifyBankAccountDataExternallyResultDto |  |
