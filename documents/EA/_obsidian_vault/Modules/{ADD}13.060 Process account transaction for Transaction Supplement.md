---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model"
domain: "Modules"
element_id: 1874107
diagrams: 1
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {ADD}13.060 Process account transaction for Transaction Supplement

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model

## 📝 Notes

{ADD DOBA-218 /}
The use case present function for creation of Transaction Supplement cardless transaction and sending it for confirmation by the transaction type (CASH/POS) to the AM system. Next, the AM response is evaluated, then Transaction Supplement status is changed appropriately and cooperating systems notified.
The use case is triggered by ContractSupplementSignedSE system event

## 🔗 Connections (3)

- ← Association: [[System Event]]
- → Realisation: [[13.110 Authorize ALOP transaction]]
- → Dependency: [[{ADD}Create Confirm Transaction Request for AM]]

## 📊 Appears In (1 diagrams)

- Use Case: Confirm Contract Supplement transactions - Use Case Model
