---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Access Rights"
domain: "Analysis Model"
element_id: 1877810
diagrams: 4
connections: 5
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}00.500 Create bank account on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Access Rights

## 📝 Notes

{ADD CBL-4414 PAYM-1613 /}

This technical use case handles CreateBankAccountRequest from BankAccountWS web service. It validates the input data and calls {ADD}Find or create bank account business rule. It responds with CreateBankAccountResponse.

## 🔗 Connections (3)

- ← Dependency: [[{ADD} BankAccountsWS]]
- → Realisation: [[{ADD}00.500 Create bank account on external request]]
- → Dependency: [[{ADD}Find or create bank account]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: BankAccountsWS
- Logical: BankAccountsWS.createBankAccount()
- Use Case: BankAccountWS operations - use case model
