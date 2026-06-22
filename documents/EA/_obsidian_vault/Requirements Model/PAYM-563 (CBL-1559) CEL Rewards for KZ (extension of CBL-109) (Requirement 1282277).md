---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)"
domain: "Requirements Model"
element_id: 1282277
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)

## 📝 Notes

In order to reward only the best customers e.g. with good payment moral, KZ needs to implement automatic rules and benefits to Hosel enabling us to differentiate between good and bad customers and reward them.

CEL rewards functionality was developed by India requirements. Kazakhstan tested CBL-109 and defined following requests for CEL rewards service:

	
- Extension of CEL reward services
	
- Extension of reward calculation method and SMS parameters
	
- New field in AF for selection of reward account number
	
- Extension of reward payment process


To deliver this CBL, we as the ISPAY team need to implement:

	
- New payment purpose RW (CEL reward)
	
- PaymentChannelWS - support for creating/modifying/geting payment channels for purpose RW (CEL reward)
	
- Support for creating outgoing payments for CEL rewards in case of repayment to debit card or bank account (not necessarily using WS)
	
- CELREW evaluation - support for repayment to debit card or bank account
	
- CELREW evaluation - support for setting Allowed number of overdue installments (means how many consequent DPD standard installments will terminate CELREW service completely)
	
- SMS notification - adding info about repayment channel

## 🔗 Connections (4)

- ← Generalization: [[REQ#2 CELREW evaluation - support for repayment to debit card or bank account]]
- ← Generalization: [[REQ#5 Reward panel]]
- ← Generalization: [[REQ#1 Changes to PaymentChannelWS]]
- ← Generalization: [[REQ#4 SMS notifications - adding info about repayment channel]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-563 (CBL-1559) CEL Rewards for KZ (extension of CBL-109)
