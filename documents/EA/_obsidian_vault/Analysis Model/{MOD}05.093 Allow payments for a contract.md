---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Outgoing payments operations on contract/Access rights"
domain: "Analysis Model"
element_id: 1879948
diagrams: 5
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.093 Allow payments for a contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Outgoing payments operations on contract/Access rights

## 📝 Notes

This use case serves for unblocking outgoing payments for a particular contract. At first system changes the payment status on the contract and then if related Salesroom has allowed payment than performes unblocking of each related outgoing payment.

## 🔗 Connections (7)

- ← Dependency: [[Allow payments (GUIElement 1848517)]]
- ← Dependency: [[Allow payments (GUIElement 1871792)]]
- → Dependency: [[REQ#2 Changes in (un)blocking payments for contract]]
- → Realisation: [[REQ#2 Blocking a outgoing payments for a particular contracts]]
- → Realisation: [[05.093 Allow payments for a contract]]
- → Dependency: [[Unblocking outgoing payments for contract]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (5 diagrams)

- Custom: Access rights
- Custom: CBL-31177 (CLM-7629) Migrated contract support
- Custom: Operational buttons - application operations
- Custom: Panel of buttons
- Use Case: Operations with an outgoing payments from the contract detail
