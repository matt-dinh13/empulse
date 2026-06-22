---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)"
domain: "Requirements Model"
element_id: 1282274
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Changes to PaymentChannelWS

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)

## 📝 Notes

Newly the CEL rewards can be disbursed to a debit card or a personal bank account. A payment channel has to be created for every such case. This payment channel will have a new payment purpose RW (CEL reward).

We need to:

	
- Add new payment purpose RW (CEL reward) to enumeration.
	
- Add support for creating/modifying payment channels for purpose RW (CEL reward) to PaymentChannelWS. Until now only payment channels with purpose RF (External refinance) were allowed.
	
- Add support for creating/modifying payment channels for purpose RW (CEL reward) to business rule Saving of payment channel - same as for external refinance.

## 🔗 Connections (1)

- → Generalization: [[PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109) (Requirement 1282277)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)
