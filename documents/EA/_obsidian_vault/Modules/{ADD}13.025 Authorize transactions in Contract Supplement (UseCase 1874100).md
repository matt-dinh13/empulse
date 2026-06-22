---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Access Rights"
domain: "Modules"
element_id: 1874100
diagrams: 3
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {ADD}13.025 Authorize transactions in Contract Supplement

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Access Rights

## 📝 Notes

{ADD CSI-3696 /}
The use case presents a method for performing authorizations of all transactions created within Contract Supplement of the Transaction type

Example of the request:

## 🔗 Connections (6)

- ← Association: [[External system (Actor 1863350)]]
- ← Dependency: [[ContractSupplements (Interface 1869924)]]
- → Dependency: [[Change status of Contract Supplement (SUP)]]
- → Usage: [[Cancel authorized transactions in Transaction Supplement (SUP)]]
- → Realisation: [[{ADD}13.025 Authorize transactions in Contract Supplement]]
- → Realisation: [[13.118 Authorize transactions in Transaction Supplement]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: Authorize Contract Supplement Transactions
- Use Case: Authorize Contract Supplement Transactions - Use Case Model
