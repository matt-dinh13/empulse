---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)"
domain: "Requirements Model"
element_id: 1282276
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 CELREW evaluation - support for repayment to debit card or bank account

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)

## 📝 Notes

In order for a client to be able to choose whether they want to receive their CEL rewards as a cash back (to their bank account) or as an incoming payment on their contract to cover a part of the loan, we need to extend the CELREW evaluation functionality. After CEL reward is granted we need to look at the setting and in case it is set to debit card, we need to create a virtual outgoing payment to the specified account.

This task includes also creating of a new outgoing payment type for CEL rewards.

## 🔗 Connections (1)

- → Generalization: [[PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109) (Requirement 1282277)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)
