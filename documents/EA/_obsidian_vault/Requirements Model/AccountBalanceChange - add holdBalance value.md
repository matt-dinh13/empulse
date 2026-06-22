---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1350895
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 AccountBalanceChange - add holdBalance value

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 📝 Notes

AccountBalanceChange - XSD AccountBalanceChangeDto

	
- add the holdBalance value - calculated as current sum of incoming payments paired to Pre-transfer instalment (temporarily, till the deduction to repay the due instalment)
	
- instDueDateNext - no change, upcoming instalment due date is provided independently on the Pre-Transfer balance presence
	
- instDueAmountNext - no change, upcoming instalment amount is provided independently on the Pre-Transfer balance presence
	
- no debt parameter (e.g. debtFeeAct, debtFeeTotal, debtInterest etc.) is affected as the pre-transfer amount is hold on holdBalance, not paired to any debt component till its due date

## 🔗 Connections (1)

- ← Association: [[REQ1_ update interfaces]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
