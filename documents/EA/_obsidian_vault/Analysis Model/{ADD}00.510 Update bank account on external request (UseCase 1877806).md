---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Access Rights"
domain: "Analysis Model"
element_id: 1877806
diagrams: 4
connections: 6
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}00.510 Update bank account on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Access Rights

## 📝 Notes

{ADD CBL-4414 PAYM-1613 /}

This technical use case handles UpdateBankAccountRequest from BankAccountWS web service. It validates the input data and finds/creates a new bank account using {ADD}Find or create bank account business rule. The original bank account is removed if it is not used in the system any more (empty data in IN!). It responds with CreateBankAccountResponse.

## 🔗 Connections (4)

- ← Dependency: [[{ADD} BankAccountsWS]]
- → Realisation: [[{ADD}00.510 Update bank account on external request]]
- → Dependency: [[{ADD}Find bank account]]
- → Dependency: [[{ADD}Find or create bank account]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: BankAccountsWS
- Logical: BankAccountsWS.updateBankAccount()
- Use Case: BankAccountWS operations - use case model
