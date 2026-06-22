---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1878746
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {ADD} Get number of paid installments for period

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

{ADD IS-2042}
Method returns number of fully paid installments without tolerance based on input parameters:
- ContractCode
- DateFrom 
- DateTo
- InstallmentTypes 
- PaymentTypes
- PaidWithoutTolerance

System returns number of active paid installments with installment type from input parameters and installment part amount bigger than zero:
- installment.activeFlag = 1 
- installment.type in ('InstallmentTypes') 
-  installmentPart.amount > 0  
- if parameter PaidWithoutTolerance=1, than installment.fullyPaidWithoutTolerance is not null
- else if parameter PaidWithoutTolerance=0, than installment.fullyPaidWithTolerance is not null
- installment. due date >= DateFrom and installment.due date <= DateTo 
where paired payment is active and has types from input parameters:
- incomingPaymentPairing.archived = 0
- incomingPayment.paymentType in ('PaymentTypes') 
- incomingPayment.status = 'A' 
- incomingPayment.pairingStatus = 'P'
