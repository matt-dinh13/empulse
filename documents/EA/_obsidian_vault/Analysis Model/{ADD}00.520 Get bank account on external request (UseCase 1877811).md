---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Access Rights"
domain: "Analysis Model"
element_id: 1877811
diagrams: 4
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}00.520 Get bank account on external request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Access Rights

## 📝 Notes

{ADD CBL-4414 PAYM-1613 /}

This technical use case handles GetBankAccountRequest from BankAccountWS web service. It searches for a requested bank account and returns its detail. It responds with GetBankAccountResponse.

## 🔗 Connections (2)

- ← Dependency: [[{ADD} BankAccountsWS]]
- → Realisation: [[{ADD}00.520 Get bank account on external request]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: BankAccountsWS
- Logical: BankAccountsWS.getBankAccount()
- Use Case: BankAccountWS operations - use case model
