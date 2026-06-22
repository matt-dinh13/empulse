---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1350891
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 DebtCatalogManagementWS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 📝 Notes

XSD AccountDebtInfo

	
- add the holdBalance value - calculated as current sum of incoming payments paired to Pre-transfer instalment (temporarily, till the deduction to repay the due instalment)
	
- debt*Act (e.g. debtFeeAct, debtInterestAct etc.) - overdue/due debt on debt component - is not changed - the Pre-transfer value will be paired to the due instalment in the moment it becomes due
	
- debt*Total (e.g. debtFeeTotal etc.) - total sum outstanding debt on debt component - is not changed - the Pre-transfer does not lower the debt till it is paired to some of due debt components
	
- incomingPaymentsSum - the same as DebtCatalogDto
	
- instDueDateNext - the same as DebtCatalogDto.nextDueDate
	
- instDueAmountNext - the same as DebtCatalogDto.nextDueAmount 
	
- payAmountLast - the same as DebtCatalogDto.maxPayAmount
	
- payDateLast - the same as DebtCatalogDto.dateLastPaid

## 🔗 Connections (1)

- ← Association: [[REQ1_ update interfaces]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
