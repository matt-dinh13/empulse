---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Access Rights"
domain: "Analysis Model"
element_id: 1857226
diagrams: 5
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}04.130 Cancel fees

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Access Rights

## 📝 Notes

This technical, non-visual use case is used to cancel fees / penalties which were previously charged on contract. Use case is able to cancel more fees / penalties from one or more contracts in one call of this functionality.

This functionality is used by external systems such as Collection system and provided through appropriate BSL interface.

{ADD CBL-10474 IS-890} New global parameter "ChargeFeeRequestJob". If this parameter is TRUE, cancel fee is not using Data transfer tables. Instead BSL uses bsl_charge_fees_request table to store incoming request. Cancel fee request is send by RabbitMQ{/ADD}

## 🔗 Connections (8)

- → Realisation: [[04.130 Cancel fees]]
- → Dependency: [[FeeStatusService]]
- → Dependency: [[AccountTransactionWS]]
- → Realisation: [[REQ 3_ Waive existing fees from contracts in loan application]]
- → Realisation: [[Requirement3 - TransWS - add reason of (un)charge fee]]
- → UseCase «include»: [[{MOD}03.091 Remove installment by external system]]
- ← Dependency «trace»: [[TransWS (Interface 1861853)]]
- ← UseCase: [[Collection system]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Logical: AccountTransactionWS - fee services
- Logical: LCS interfaces - FeeStatusService
- Logical: TransWS
- Use Case: Fee services used by external system (Collection)
