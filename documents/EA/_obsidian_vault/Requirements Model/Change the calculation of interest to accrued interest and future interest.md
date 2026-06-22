---
type: Change
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1327101
diagrams: 1
connections: 13
tags:
  - change
  - requirements-model
---

# 📄 Change the calculation of interest to accrued interest and future interest

> **Type**: Change · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 📝 Notes

CHANGE:

	
- new global parameter SEPARATE_FUTURE_INTEREST (SeparateFutureInterest) - boolean
	
- new instalment part type IF (Future Interest) in InstallmentPartType
	
- CBSA instalment part type + translation instalment_type = 25
	
- change in interest calculation in ALG_Early repayment calculation A1
	
- change in UC 03.110 Perform early repayment installment schedule
	
- for calculation of future interest must be Interest included in EG, EM operation (for KZ)
	
- change of debt catalogue interest calculation


The accrued interest is calculated as Interest (I), the future interest is calculated as new type Future interest (IF).

If Global Parameter SEPARATE_FUTURE_INTEREST - True and Instalment part type Interest is included in operation then calculate the Interest for early repayment result as following:

Payable Item.Part Type = 'I'

	
- RESULT.Interest.Amount = Round(AccruedPeriod * NI.Interest.Amount/TotalPeriod [rounding_scale]; [rounding_method])


Payable Item.Part Type = 'FI'

	
- RESULT.FutureInterest.Amount = Round(NI.Interest.Amount - Accrued interest) + FI.Interest.Amount


Note: if interest (I) instalment part type is not involved in Instalments included in operation for recalculation reasons EM and EG, the Early Repayment RESULT.PartType = 'IF' is not calculated.

If Global Parameter SEPARATE_FUTURE_INTEREST - False and Instalment part type Interest is included in operation  the Interest calculation is not changed in early repayment result  (interest is calculated and summed in one Result.PayableItems.Interest).

## 🔗 Connections (11)

- → Dependency: [[Installment Included In Operation]]
- → Dependency: [[Installment Part Type (Class 1833460)]]
- → Dependency: [[{MOD}ALG_Pay off value calculation]]
- → Dependency: [[{MOD} 03.110 Perform early repayment installment schedule]]
- → Dependency: [[InstallmentPartDto]]
- ← Dependency: [[REQ2_ FER with gift payment - divide the charged interest into accrued interest and future interest ]]
- → Dependency: [[InstallmentItem]]
- → Dependency: [[Global Parameter]]
- → Dependency: [[{MOD}ALG_Early repayment calculation A1]]
- → Dependency: [[PayableItem]]
- ← Dependency: [[REQ1_ FER in moratorium - divide the charged interest into accrued interest and future interest for ]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
