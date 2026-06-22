---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Access Rights"
domain: "Analysis Model"
element_id: 1857227
diagrams: 6
connections: 17
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}04.140 Charge fees

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Access Rights

## 📝 Notes

This technical, non-visual use case is used to charge fees / penalties to required contract. Use case is able to charge more fees / penalties to one or more contracts in one call of this functionality.

This functionality is used by external systems such as Collection system and provided through appropriate BSL interface.

{ADD CBL-10474 IS-890} New global parameter "ChargeFeeRequestJob". If this parameter is TRUE, charge fee is not using Data transfer tables. Instead BSL uses bsl_charge_fees_request table to store incoming request. Charge fee request is send by RabbitMQ{/ADD}

## 🔗 Connections (17)

- → Dependency: [[AccountTransactionWS]]
- → Realisation: [[Requirement3 - TransWS - add reason of (un)charge fee]]
- → Realisation: [[REQ#1 Setting of tariffs for State duty fee]]
- → Dependency: [[Calculate Tariff Item amount for period from debt]]
- → Dependency: [[{MOD}Check fee request and find corresponding tariff item]]
- → Dependency: [[FeeStatusService]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → Realisation: [[04.140 Charge fees]]
- → Dependency: [[{ADD} Calculate tariff item amount]]
- → Realisation: [[REQ 2_ Charge collections fees and penalties]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- → UseCase «include»: [[{MOD}03.080 Add installment]]
- → Dependency: [[Algorithm_ Find tariff by Current Tariff Use flag]]
- → Dependency: [[Adjust penalty amount by limit]]
- → Dependency: [[{ADD} Calculate fees and penalties]]
- ← Dependency «trace»: [[TransWS (Interface 1861853)]]
- ← UseCase: [[Collection system]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Logical: AccountTransactionWS - fee services
- Logical: LCS interfaces - FeeStatusService
- Logical: TransWS
- Use Case: Fee services used by external system (Collection)
- Use Case: OVERVIEW - Installment Schedule
