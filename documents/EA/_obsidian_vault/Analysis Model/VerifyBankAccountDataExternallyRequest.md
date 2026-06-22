---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1328329
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 VerifyBankAccountDataExternallyRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD PAYM-1214 CBL-1767 /}

## 🔗 Connections (3)

- → Dependency: [[BankAccountDataVerificationAttributesDto]]
- → Dependency: [[BankAccountDataDto]]
- ← Dependency: [[{ADD} BankAccountsWS]]

## 📊 Appears In (1 diagrams)

- Logical: BankAccountsWS.verifyBankAccountDataExternally()

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankAccountData | BankAccountDataDto |  |
| verificationAttributes | BankAccountDataVerificationAttributesDto |  |
