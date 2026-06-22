---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Access Rights/Payment channels"
domain: "Analysis Model"
element_id: 1833501
diagrams: 6
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.661 Change application disbursement payment channel

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Access Rights/Payment channels

## 📝 Notes

//Created as a copy of 01.662 Change disbursement channel and adjusted accordingly.
This use case enables the user to change the disbursement payment channel for a particular application.

## 🔗 Connections (10)

- ← Realisation: [[Change disbursement channel (Screen 1820271)]]
- → UseCase «include»: [[01.674 Delete card data in external module for contract]]
- → Dependency: [[Get allowed disbursement methods for application]]
- → Dependency: [[Get application payment channel by its purpose]]
- → UseCase «include»: [[01.673 Save card data to external module for contract]]
- → Realisation: [[01.661 Change application disbursement payment channel]]
- → Dependency: [[Update application payment channel]]
- → Realisation: [[{ADD}01.661 Change application disbursement payment channel (Beneficiary)]]
- ← Dependency: [[Change disbursement channel (GUIElement 1857149)]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: Change disbursement channel
- Custom: LOR-10450 Do not allow to change the information to disburse after BOD2 and before sign
- Custom: LOR-9836 Application detail: Beneficiary panel for disbursement
- Custom: Tab - Payment channels
- Use Case: Payment channels
