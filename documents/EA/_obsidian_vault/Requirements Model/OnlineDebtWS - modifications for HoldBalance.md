---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1350879
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 OnlineDebtWS - modifications for HoldBalance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 📝 Notes

OnlineDebtWS - XSD DebtCatalogDto

	
- add the holdBalance value - calculated as current sum of incoming payments paired to Pre-transfer instalment (temporarily, till the deduction to repay the due instalment)
	
- future debt (e.g. debtInterestFut, debtPrincipalFut etc.) will not be recalculated because no payment will be paired to the debt as prepayment
	
- current debt (e.g. debtInterestAct, debtPrincipalAct etc.) will be changed once the due amounts are deducted from Pre-transfer to due instalments (due amount deduct from Pre-Transfer to due prescribed instalment)
	
- dateLastPaid - incoming payments fully paired to Pre-transfer are taken in account when getting date of the latest payment on contract
	
- incomingPaymentsSum - also incoming payments fully paired to Pre-transfer are taken in account when getting sum of incoming payments on contract
	
- maxPayAmount - latest payment amount - also the incoming payments fully paired to Pre-transfer are taken in account
	
- nextDueDate, nextDueAmount - no change, when the instalment is not due, it´s not repaid and this instalment is taken in account when getting upcoming instalment amount and due date

OnlineDebtWS - XSD CalculateDebtResponse

	
- debt on not due instalments is not changed till the due date, no change on calculation of debtOnAccuredInterest, debtOnFees and debtOnPrincipal

## 🔗 Connections (1)

- ← Association: [[REQ1_ update interfaces]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
