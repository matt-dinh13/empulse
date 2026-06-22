---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/Various things"
domain: "Requirements Model"
element_id: 1879415
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Recalculate Annuity in OFP

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/Various things

## 📝 Notes

// Updates selected Offer Financial Parameters with respect to updated First Installment Due Date

Input/Output:

	
- OFP


OriginalAnnuity = OFP.Annuity
OriginalTotalMonthlyPayment = OFP.TotalMonthlyPayment

Steps:

// Annuity base amount calculation (see also Annuity base amount definition)
AnnuityBaseAmount = OFP.ProvidedCreditAmount
System subtracts subventions allocated to client:
AnnuityBaseAmount = AnnuityBaseAamount - SubventionPartner(SPPAC) - SubventionManufacturer(SPMMAC) {ADD PCG-1283}- SubventionHomeCredit(SHCAC){/ADD}, 
where SPPAC, SPMAC {ADD PCG-1283}and SHCAC{/ADD} are defined by Subvention amount definition.

// Annuity recalculation
Calculate Annuity according to algorithm Annuity calculation with parameters:
- AIR = OFP.InterestRate
- Term  = OFP.Terms
- AnnuityBaseAmount
- InstallmentScheduleMethod = OFP.InstallmentScheduleMethod
- DayCountMethod = OFP.DayCountMethod
- StartDate = current date
- FirstDueDate = OFP.FirstDueDate
Set OFP.Annuity = Annuity 

// TotalMonthlyInstallment recalculation
Set OFP.TotalMonthlyInstallment = OriginalTotalMonthlyPayment + (Annuity - OriginalAnnuity)

Note: 
After the Installment Schedule is (re)generated in the next steps then update also 
OFP.FirstInstallmentAmount
OFP.TotalPaymentPerCredit 
with data evaluated from Installment Schedule

## 🔗 Connections (3)

- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- → Dependency: [[{MOD}Annuity base amount definition]]
- → Dependency: [[{MOD}Subvention amount definition]]

## 📊 Appears In (2 diagrams)

- Logical: Various things
- Use Case: Prepare documentation to sign
