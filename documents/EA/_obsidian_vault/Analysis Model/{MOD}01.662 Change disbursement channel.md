---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/Access Rights"
domain: "Analysis Model"
element_id: 1880148
diagrams: 7
connections: 21
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.662 Change disbursement channel

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/Access Rights

## 📝 Notes

This use case enables user to change a disbursement channel to other or edit the existing one. {ADD PAYM-5500} If global parameter ChangeDisbChannelAfterSign=FALSE, than {/ADD} Payment channel can be changed only for unpaid outgoing payments. {ADD PAYM-5500}Else if global parameter ChangeDisbChannelAfterSign=TRUE, than it is possible to change disbursement channel even for contract with paid outgoing payment{/ADD}

## 🔗 Connections (18)

- ← Realisation: [[Change disbursement channel (Screen 1873926)]]
- ← Realisation: [[Disbursements - change disb. channel]]
- ← Realisation: [[Change disbursement channel (GUIElement 1879201)]]
- → Realisation: [[01.662 Change disbursement channel]]
- → Realisation: [[01.662 Change disbursement channel EXISTING]]
- → UseCase «include»: [[01.674 Delete card data in external module for contract]]
- → UseCase «include»: [[{MOD}01.668 Create request for change disbursement channel]]
- → Realisation: [[{ADD}01.662 Change disbursement channel only when contract is active]]
- → Realisation: [[Req #1 - Changes in Payment Channels setting]]
- → Dependency: [[Get allowed disbursement methods for application]]
- → Realisation: [[01.662 Change disbursement channel BASIC]]
- → Realisation: [[REQ 1_ VN Bank Account Structure]]
- → Dependency: [[Update Contract Bank Account rule]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → UseCase «include»: [[01.673 Save card data to external module for contract]]
- → Realisation: [[01.662 Change disbursement channel EXTENDED]]
- → Realisation: [[REQ1 - Allow set DDM as payment channel for contract in status APPROVED or RETURNED]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Custom: Change disbursement channel
- Custom: Disbursements - change disb. channel
- Custom: PAYM-1365 (CBL-3841) - BSL - send request to CEV to verify card data
- Custom: PAYM-1613 - savingOfPaymentChannels
- Custom: Tab-Payment channels
- Use Case: Change disbursement channel
