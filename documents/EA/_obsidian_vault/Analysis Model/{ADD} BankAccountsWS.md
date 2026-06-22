---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts"
domain: "Analysis Model"
element_id: 1435469
diagrams: 6
connections: 20
tags:
  - interface
  - analysis-model
---

# 🔶 {ADD} BankAccountsWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank accounts

## 📝 Notes

{ADD PAYM-1214 CBL-1767 /}

Interface for bank account data management.

## 🔗 Connections (16)

- → Dependency: [[{ADD}GetBankAccountResponse]]
- → Dependency: [[getBankAccountByCUIDResponse]]
- → Dependency: [[{ADD}UpdateBankAccountRequest]]
- → Dependency: [[{ADD}UpdateBankAccountResponse]]
- → Dependency: [[GetBankAccountByCUIDRequest]]
- → Dependency: [[VerifyBankAccountDataExternallyRequest]]
- → Dependency: [[{ADD}00.530 Get bank account by CUID request]]
- → Dependency: [[{ADD}00.500 Create bank account on external request (UseCase 1877810)]]
- → Dependency: [[VerifyBankAccountDataExternallyResponse]]
- → Dependency: [[{ADD}00.510 Update bank account on external request (UseCase 1877806)]]
- → Dependency: [[{ADD}CreateBankAccountResponse]]
- → Dependency: [[{ADD}CreateBankAccountRequest]]
- → Abstraction «trace»: [[{MOD CBL-31820}00.300 - Verify bank account data externally - service(_MOD)]]
- → Dependency: [[{ADD}GetBankAccountRequest]]
- → Dependency: [[{ADD}00.520 Get bank account on external request (UseCase 1877811)]]
- → Dependency: [[getBankAccountByCUIDFault]]

## 📊 Appears In (6 diagrams)

- Logical: BankAccountsWS
- Logical: BankAccountsWS.createBankAccount()
- Logical: BankAccountsWS.getBankAccount()
- Logical: BankAccountsWS.getBankAccountByCUID
- Logical: BankAccountsWS.updateBankAccount()
- Logical: BankAccountsWS.verifyBankAccountDataExternally()
