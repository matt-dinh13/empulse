---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans"
domain: "Requirements Model"
element_id: 1807828
diagrams: 6
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Recalling of terminated Installment schedule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-7 (CBL-29) Consolidation (Top up) for cash loans

## 📝 Notes

Input:
- contract
- recalculationReason

If Virtual Installment Schedule (VIS) was generated in any superior UC then it is used for every operations in this rule instead of currently valid IS. 


	
- Find the maximal version of active and inactive installments by the rule Maximal Version of Installment Schedule and sets it as MV.
	
- Find the Installment(I) where I.Active = TRUE and I.RecalculationReason = recalculationReason and set I.InstallmentVersion as terminatedIV. 
If no such installment is found, scenario ends.
	
- Deactivation of Paid-off 
For each Installment(I) where I.Active = TRUE and I.InstallmentVersion = terminatedIV. set
- I.Active = FALSE
- I.Deactivated In Version = MV + 1
	
- Reactivation of status before Paid-off
For each Installment(I) where I.Active = FALSE and I.DeactivatedInVersion = terminatedIV. create new installment as a copy of Installment and set
- I.Active = TRUE
- I.Installment Version = MV + 1


Note: All Fees/Penalties charged after date of termination will be preserved, i.e. must be paid by client.

## 🔗 Connections (3)

- ← Dependency: [[Creating of virtual IS for FER in status Paid-off]]
- ← Dependency: [[01.360 Cancel contract (UseCase 1850507)]]
- ← Dependency: [[{MOD} 03.110 Perform early repayment installment schedule]]

## 📊 Appears In (6 diagrams)

- Custom: IS-7 (CBL-29) Consolidation (Top up) for cash loans
- Use Case: Cancel contract
- Use Case: Full early repayment processing
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
- Use Case: OVERVIEW - Installment Schedule
