---
type: Change
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment"
domain: "Requirements Model"
element_id: 1391707
diagrams: 1
connections: 4
tags:
  - change
  - requirements-model
---

# 📄 ER preview

> **Type**: Change · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment

## 📝 Notes

- The system will not include the Prepayment values in the EarlyRepaymentResult.ERFeeItems/OverdueItems/PayableItems - no modification needed - Prepayment cannot be unpaid, will not be included in IIP (Instalments included in opration)
	
- new parameter in EarlyRepaymentResult is added: TotalPrepayments - source: DebtCatalogue.PrepaymentAmount
	
- Total to payment on Early repayment preview has to be updated as following: TotalToPayment = Result.Total To Paid- Gift payment amount (if it is not NULL) - Result.TotalPrepayments (if is is not NULL)

## 🔗 Connections (3)

- → Dependency: [[08.270 Show CET repayment preview (UseCase 1862238)]]
- → Dependency: [[08.065 Calculate Cooling-off period repayment preview]]
- → Dependency: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]

## 📊 Appears In (1 diagrams)

- Use Case: PAYM-1887 (CBL-4285) - Pairing time for payment made before due date - services alignment
