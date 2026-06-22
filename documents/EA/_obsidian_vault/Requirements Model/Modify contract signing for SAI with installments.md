---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment"
domain: "Requirements Model"
element_id: 1688850
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Modify contract signing for SAI with installments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment

## 📝 Notes

Add new attribute of Contract (i.e. hasInstallments) and fill it based on a new product flag (SAI_WITH_INSTALLMENT_SCHEDULE, will be present only on SAI with IS)

	
- If SAI and the flag is present on the product then hasInstallments = true
	
- If SAI and the flag is not present on the product then hasInstallments = false
	
- If CEL then hasInstallments = true
	
- If REL then hasInstallments = false)


The new attribute has to be propagated to DWH.
Set condition accepted = true for SAI with installments (same as for CEL).
Make sure that debt catalogue is calculated for SAI with installments (same as for CEL).
Make sure that installment schedule is copied from OFP to FP for SAI with installments (same as for CEL).

Data migration:
Create column Has Installments and populate with False, then update to True where Contract.Type = 'CEL'.

## 📊 Appears In (1 diagrams)

- Custom: CLM-3817 - New SAI - Contract signing
