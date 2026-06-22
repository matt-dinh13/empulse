---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-746 (CBL-1050) Securitization - Insurance and fees"
domain: "Requirements Model"
element_id: 1271643
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Req#1 - New items calculated for contract securitization

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-746 (CBL-1050) Securitization - Insurance and fees

## 📝 Notes

New items calculated for contract securitization purposes:

	
- accruedFeeOnLastInstallment - Accrued Fee on the closest next installment where due date is equal or higher then sale dale (i.e. accrued Fee between "last due date" and "sale date - 1 day").
	
- accruedFeeTillEndOfMonth - Accrued Fee till end of month on the last closest installment where due date is equal or higher then sale dale (i.e. accrued Fee between "last due date" end of month from "last due date").
	
- totalPaidFee - Paid amount is calculated from payments paired before sales date on installment parts (type F or FT) - regardless of due date.
	
- pastPrescribedFee - Sum of all installment parts (type F or FT) with due date lower than the sales date.
	
- totalPaidPenalty - Paid amount is calculated from payments paired before sales date on installment parts (type P) - regardless of due date.
	
- totalPrescribedPenalty	 - Sum of all installment parts (type P) - regardless of due date.

## 📊 Appears In (1 diagrams)

- Custom: CLM-746 (CBL-1050) Securitization - Insurance and fees
