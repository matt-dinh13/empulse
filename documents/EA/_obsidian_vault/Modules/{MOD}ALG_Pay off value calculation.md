---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1723832
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}ALG_Pay off value calculation

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

Input values and definitions:

	
- Termination Due Date (TDD; the date of pay-off)


	
- Start of accounting period date (SDD; due date of the standard active installment before the Nearest Installment; in case no installment exists (i.e. TDD is due date of the first installment), SDD = Sign date of the contract)


	
- Nearest Installment (NI;  Installment parts of the nearest future standard active Installment with due date >= TDD)
	
- Future Installments (FI; Installment parts of the future standard active Installments with due date > NI due date)
	
- Involved Installment Part Types (IIPT; set of future installment parts and their Tariff Items to be involved into calculation)
	
- For number of days calculations between SDD and TDD, Days360 function is used - see Calculate number of days for 30/360 day count convention for definition
	
- For rounding of calculated amounts are obtained [rounding_scale] and [rounding_method] parameter values of particular business - see Rounding for more information.
	
- InstallmentScheduleMethod - the installment schedule method used for the contract (i.e. Contract.Financial Parameters.Installment Schedule Method


Steps:
System determines way of calculation of accrued and  total installment period length (i.e. number of days for that) by InstallmentScheduleMethod as follow:

	
- for Installment methods IS_ALG_EQ_PRINC, IS_ALG_AN_PRINC {ADD PAYM-1787 CBL-4815}, IS_ALG_EQUAL_ANNUITY{/ADD}:
- TotalPeriod = Days(SDD - NI.Due Date)
- AccruedPeriod =Days(SDD - TDD)


	
- for other methods
- TotalPeriod = 30
- AccruedPeriod = Days360(SDD; TDD){ADD RFC-161586}; If AccruedPeriod > TotalPeriod then set AccruedPeriod = TotalPeriod{/ADD}


System involves all Installment parts of active Nearest Installment (NI) into calculation. The Future Installments (FI) installment parts with types set in IIPT are taken into account.
System returns result (RESULT) with calculated values:
1. Accrued principal:
  	RESULT.Principal.Amount = Round(AccruedPeriod * NI.Principal.Amount/TotalPeriod [rounding_scale]; [rounding_method])
  If future Principal is involved by IIPT:
  	RESULT.PrincipalTerminated.Amount = NI.Principal.Amount - RESULT.Principal.Amount + sum of (FI.Principal.Amount)
   If future Principal is not involved by IIPT:
	RESULT.PrincipalTerminated.Amount = 0

2. Accrued interest:
   	RESULT.Interest.Amount = Round(AccruedPeriod * NI.Interest.Amount/TotalPeriod [rounding_scale]; [rounding_method])
   If future Interest is involved by IIPT
	RESULT.InterestTerminated.Amount = NI.Interest.Amount - RESULT.Interest.Amount + sum of (FI.Interest.Amount)
   If future Interest is not involved by IIPT
	RESULT.InterestTerminated.Amount = 0

3. All fees are summarized separately based on the related Tariff Item Type in common. In other words, all Fees with the same Tariff Item Types are grouped together (X = particular Tariff Item Type of Fee).
   a. For accrued fees in standard installment (Installment.InstallmentType = 'STANDARD'):
	RESULT.Fee.X.Amount = Round(AccruedPeriod * NI.Fee.X.Amount/TotalPeriod [rounding_scale]; [rounding_method])
   If future Fee of 'X' Tariff Item is involved by IIPT
	RESULT.FeeTerminated.X.Amount = NI.Fee.X.Amount - RESULT.Fee.X.Amount + sum of (FI.Fee.X.Amount)
   If future Fee of 'X' Tariff Item is not involved by IIPT
	RESULT.FeeTerminated.X.Amount = 0
   b. For extraordinary charged accrued fees with due date within the period {SDD < fee due date <= TDD} (it means separately charged fees where Installment.InstallmentType = 'EXTRAORDINARY'):
	RESULT.Fee.X.Amount = NI.Fee.X.Amount
   Notice: Extraordinary charged "Future" fees are not taken into account because it is not possible to charge a fee in the future.

4. All penalties are summarized separately based on the related Tariff Item Type in common  (X = particular Tariff Item Type of Penalty). The calculation pays for penalty due date within the period {SDD < penalty due date <= TDD}
	RESULT.Penalty.X = NI.Penalty.X.Amount
  Notice: "Future" penalties are not taken into account because it is not possible to charge a penalty in the future.

5. RESULT.PAYOFF_AMOUNT = sum of amounts from steps 1 to 4 plus sum of overdue debt from installment parts with due date before TDD

## 🔗 Connections (3)

- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- → Dependency: [[Calculate number of days for 30_360 day count convention]]
- ← Dependency: [[{MOD}03.120 Pay off installment schedule]]

## 📊 Appears In (3 diagrams)

- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
