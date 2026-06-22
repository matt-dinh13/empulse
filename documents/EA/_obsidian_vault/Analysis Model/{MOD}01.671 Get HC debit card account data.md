---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/Access Rights"
domain: "Analysis Model"
element_id: 1727110
diagrams: 4
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.671 Get HC debit card account data

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/Access Rights

## 📝 Notes

This use case enables the user to search for an existing debit card account (managed by Account Management module) for particular client and if found, to use its data for pre-filling the respective fields on General bank account panel.

## 🔗 Connections (4)

- ← Realisation: [[Use existing account]]
- ← Realisation: [[{MOD}HC Debit card account selection]]
- → Dependency: [[Fill bank according to account number]]
- → Realisation: [[01.671 Get HC debit card account data]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: HC Debit card account selection - choose HC debit card
- Custom: HC Debit card account selection - panel
- Custom: PAYM-1973 (CBL-5228) CEL Reward - Disbursement channel changes
