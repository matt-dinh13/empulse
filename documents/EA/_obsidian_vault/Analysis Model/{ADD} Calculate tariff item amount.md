---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878878
diagrams: 3
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD} Calculate tariff item amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

{ADD CBL-15418 IS-1537}
This rule is used for calculation of tariff item amount for charging fees. 
It replace Algorithm: Calculate tariff item amount which is part on Product catalog module

Input:

	
- TariffItem - mandatory
	
- Group - optional


	
- Contract - mandatory if contract exists
	
- Offer Financial Parameters (OFP) - mandatory if contract does not exist


	
- Service - optional
	
- LimitNumberBase - mandatory for TariffItem.LimitNumberBasedOn = EDLN
	
- LimitAmountBase - mandatory for TariffItem.LimitAmountBasedOn = EDLA
	
- PercentageBase - mandatory for TariffItem.PercentageBasedOn = EDB
	
- PeriodStart - optional


	
- PeriodEnd - optional
	
- Rounding - optional, default = True
	
- Amount - optional


Output:

	
- TariffItemAmount


Algorithm:
Parameters Contract , OFP, Service can be necessary as parameters for the rule defined in description of Base Type (see below).

	
- If TariffItem.Group is defined for and (Group is not defined on input OR Group on input is different to TariffItem.Group) then system returns TariffItemAmount = 0 and calculation ends.
Note: 
Inside BSL there is always empty group on input (functionality for evaluation of group is not implemented yet), so tariff items with defined group are ignored. Groups can be used in external components, which share Tariff definitions (e.g. Cabus-AM).
	
- If a TariffItem.LimitNumberFrom/To and TariffItem.LimitNumberBasedOn is defined for tariff item:
If TariffItem.LimitNumberBasedOn = EDLN (Explicitly defined base for limit number) then ComparedValue = LimitNumberBase from input.
- Else system calculates ComparedValue according to rule defined in description of Base Type with respect to TariffItem.LimitNumberBasedOn; 
- if TariffItem.LimitNumberFrom <= ComparedValue < TariffItem.LimitNumberTo then system continues with calculation. Otherwise system returns TariffItemAmount = 0 and calculation ends.
	
- If a TariffItem.LimitAmountFrom/To and TariffItem.LimitAmountBasedOn is defined for tariff item:
If TariffItem.LimitAmountBasedOn = EDLA (Explicitly defined base for limit amount) then ComparedValue = LimitAmountBase from in put.
- Else system calculates ComparedValue according to rule defined in description of Base Type with respect to TariffItem.LimitAmountBasedOn; 
- if TariffItem.LimitAmountFrom <= ComparedValue < TariffItem.LimitAmountTo then system continues with calculation. Otherwise system returns TariffItemAmount = 0 and calculation ends.
	
- System calculates TariffItemAmount according to TariffItem.CalculationMethod:
- If CalculationMethod = 'Fixed' then TariffItemAmount = TariffItem.Amount. No rounding is applied for fixed values.
- If CalculationMethod = 'Percentage' or 'Annual Percentage' then 
--- If TariffItem.PercentageBasedOn = EDB (Explicitly defined base), EDBI (Explicity defined base Interest) or EDBP (Explicity defined base principal) , the value of PercentageBase from input is used for calculation.
--- Else system calculates PercentageBase according to rule defined in description of Base Type with respect to TariffItem.PercentageBasedOn.

        --- If CalculationMethod = 'Annual Percentage' system takes PercentageBase as annual value and recalculates it according to interval <PeriodStart, PeriodEnd>.
        - {ADD  IS-2302 BRPH-92/}For country: PH: - If CalculationMethod = 'Combined' then 
         -- If TariffItem.PercentageBasedOn = EDB (Explicitly defined base), EDBI (Explicity defined base Interest) or EDBP (Explicity defined base principal) , the value of PercentageBase from input is used for calculation.
         -- else system calculates PercentageBase according to rule defined in description of Base Type with respect to TariffItem.PercentageBasedOn and PercentageAmount = PercentageBase * TariffItem.Percentage. 
        TariffItemAmount = TariffItem.Amount + PercentageAmount{/ADD}
        Then system calculates TariffItemAmount =  PercentageBase * TariffItem.Percentage.
     - If calculation method = Manual amount, then TariffItemAmount = Amount from input. No rounding is applied for fixed values.
       {ADD CLM-7259 CLM-7561}{country PH} If there is no manual amount on input, TariffItemAmount = Item amount from financial parameters (FinancialParameters -> financialParametersItem.Amount) //this option is used for debt purchase in first installment amount where manual amount is saved on offer financial parameters{/ADD}
5.     If input parameter rounding = True then system applies rounding rule on result (TariffItem.Rounding, TariffItem.RoundingScale).
6.     If TariffItemAmount is less than TariffItem.MinAmount and TariffItem.MinimalAmountToZero = FALSE then TariffItemAmount = TariffItem.MinAmount 
7.     If TariffItemAmount is less than TariffItem.MinAmount and TariffItem.MinimalAmountToZero = TRUE then TariffItemAmount = 0.
8.     If TariffItemAmount is greater than TariffItem.MaxAmount then TariffItemAmount = TariffItem.MaxAmount.
9.     System returns TariffItemAmount.

## 🔗 Connections (5)

- ← Dependency: [[{MOD}04.140 Charge fees]]
- ← Dependency: [[04.110 Process charging requests]]
- → Dependency: [[{MOD}Base Type]]
- ← Dependency: [[{ADD} Calculate fees and penalties]]
- ← Dependency: [[Calculate Tariff Item amount for period from debt]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Charging request
- Use Case: Fee services used by external system (Collection)
