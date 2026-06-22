---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Outgoing payments operations on contract/Access rights"
domain: "Analysis Model"
element_id: 1879949
diagrams: 7
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.094 Block payments for a contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Outgoing payments operations on contract/Access rights

## 📝 Notes

This use case serves for blocking outgoing payments for a particular contract. At first system changes the payment status on the contract and then changes status of all related outgoing payments to 'unpaid'.

## 🔗 Connections (9)

- ← Dependency: [[Block payments]]
- ← Dependency: [[Block payments (GUIElement 1871776)]]
- → Realisation: [[REQ3_ Hide some buttons in _Button panel_ for Revolving contracts]]
- → Dependency: [[REQ#2 Changes in (un)blocking payments for contract]]
- → Dependency: [[Blocking outgoing payments for contract]]
- → Realisation: [[05.094 Block payments for contract]]
- → Dependency: [[{DEL}Business type of loan]]
- → Realisation: [[REQ#2 Blocking a outgoing payments for a particular contracts]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (7 diagrams)

- Custom: Access rights
- Custom: CBL-31177 (CLM-7629) Migrated contract support
- Custom: CBL-6141 (CLM-2022) Register and finish fully paid signed contracts on due date
- Custom: CBL-7307 (CLM-2276) Blocking disbursement on signed contracts before finishing
- Custom: Operational buttons - application operations
- Custom: Panel of buttons
- Use Case: Operations with an outgoing payments from the contract detail
