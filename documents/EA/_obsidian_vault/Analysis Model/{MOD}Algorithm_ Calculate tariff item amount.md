---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules"
domain: "Analysis Model"
element_id: 1879060
diagrams: 20
connections: 28
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Algorithm: Calculate tariff item amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Payment Holidays/Business Rules

## 📝 Notes

Algorithm is used for calculation of tariff item amount.

Input:

	
- TariffItem - mandatory
	
- Group - optional
	
- Contract - mandatory if contract exists
	
- Offer Financial Parameters (OFP) - mandatory if contract does not exist
	
- Service - optional
	
- LimitNumberBase - mandatory for TariffItem.LimitNumberBasedOn = EDLN
	
- LimitAmountBase - mandatory for TariffItem.LimitAmountBasedOn = EDLA
	
- LimitValueBase
	
- PercentageBase - mandatory for TariffItem.PercentageBasedOn = EDB
	
- PeriodStart - optional
	
- PeriodEnd - optional
	
- Rounding - optional, default = True
	
- Number of top up installments - mandatory for TariffItem.PercentageBasedOn = DI
	
- {ADD PCG-5620}Manual amount (tariff item type, amount){/ADD}


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
If TariffItem.LimitAmountBasedOn = EDLA (Explicitly defined base for limit amount) then ComparedValue = LimitAmountBase from input.
- Else system calculates ComparedValue according to rule defined in description of Base Type with respect to TariffItem.LimitAmountBasedOn; 
- if TariffItem.LimitAmountFrom <= ComparedValue < TariffItem.LimitAmountTo then system continues with calculation. Otherwise system returns TariffItemAmount = 0 and calculation ends.
	
- {ADD PCG-5010 BRPH-333/}For country: PH:
If TariffItem.TariffItemType.Flag = LIMIT_EQUALS_INPUT and LimitValueBase.Type in (RG) and (no ComparedValue (LimitValueBase.Value) is on input or Comparedvalue is null (empty)) then calculate only TariffItem where LimitValue is not set.
else
{/ADD}
--If a TariffItem.LimitValue and TariffItem.LimitValueBasedOn is defined for tariff item: ComparedValue = LimitValueBase from input
--- If TariffItem.LimitValue = ComparedValue then system continues with calculation. Otherwise system returns TariffItemAmount = 0 and calculation ends.
	
- System calculates TariffItemAmount according to TariffItem.CalculationMethod:
- If CalculationMethod = 'Fixed' then TariffItemAmount = TariffItem.Amount. No rounding is applied for fixed values.
- If CalculationMethod = 'Percentage' or 'Annual Percentage' then 
--- If TariffItem.PercentageBasedOn = EDB (Explicitly defined base), EDBI (Explicity defined base Interest) or EDBP (Explicity defined base principal) , the value of PercentageBase from input is used for calculation.
        --- Else system calculates PercentageBase according to rule defined in description of Base Type with respect to TariffItem.PercentageBasedOn.
        --- If CalculationMethod = 'Annual Percentage' system takes PercentageBase as annual value and recalculates it according to interval <PeriodStart, PeriodEnd>.
Then system calculates TariffItemAmount =  PercentageBase * TariffItem.Percentage.
For country: PH: - If CalculationMethod = 'Combined' then 
-- If TariffItem.PercentageBasedOn = EDB (Explicitly defined base), EDBI (Explicity defined base Interest) or EDBP (Explicity defined base principal) , the value of PercentageBase from input is used for calculation.
  -- else system calculates PercentageBase according to rule defined in description of Base Type with respect to TariffItem.PercentageBasedOn and PercentageAmount = PercentageBase * TariffItem.Percentage. 
TariffItemAmount = TariffItem.Amount + PercentageAmount
{ADD PCG-5620}PH only: - If CalculationMethod = 'Manual' then TariffItemAmount = Manual amount from input.{/ADD}
	
- {ADD PCG-5517}For country PH: If TariffItem.DivideByTerms = 1 then TariffItemAmount = TariffItemAmount/NumberOfTerms(NT){/ADD}
	
- If input parameter rounding = True then system applies rounding rule on result (TariffItem.Rounding, TariffItem.RoundingScale).
	
- If TariffItemAmount is less than TariffItem.MinAmount and TariffItem.MinimalAmountToZero = FALSE then TariffItemAmount = TariffItem.MinAmount
	
- If TariffItemAmount is less than TariffItem.MinAmount and TariffItem.MinimalAmountToZero = TRUE then TariffItemAmount = 0.
	
- If TariffItemAmount is greater than TariffItem.MaxAmount then TariffItemAmount = TariffItem.MaxAmount.
	
- System returns TariffItemAmount.

## 🔗 Connections (26)

- ← Dependency: [[Calculate Payment holiday financial parameters]]
- ← Dependency: [[{MOD}03.120 Pay off installment schedule]]
- ← Dependency: [[08.262 Process Fees-back service (UseCase 1838986)]]
- ← Dependency: [[{MOD}04.140 Charge fees]]
- ← Dependency: [[04.110 Process charging requests]]
- ← Dependency: [[08.061 Show parameters for change due date (UseCase 1862209)]]
- ← Dependency: [[08.050 Show Partial ER preview]]
- ← Dependency: [[Finalize paid part of installment schedule]]
- ← Dependency: [[01.794 Get ContractCHDDRequest preview service (UseCase 1869814)]]
- ← Dependency: [[01.795 Create ContractCHDDRequest service (UseCase 1869792)]]
- ← Dependency: [[Create first Insurance Period upon related Contract disbursement]]
- ← Dependency: [[08.409 Evaluate Checking Terms of Loan Service]]
- ← Dependency: [[Store offer data]]
- ← Dependency: [[{MOD}Compute partner’s payment amount]]
- ← Dependency: [[Origination fees amount definition]]
- ← Dependency: [[Monthly fees amount definition]]
- ← Dependency: [[In first installment fees amount definition]]
- ← Dependency: [[Service fees amount definition]]
- ← Dependency: [[{ADD} Calculate fees and penalties]]
- ← Dependency: [[{ADD}Additional fees calculation]]
- → Dependency: [[{MOD}Base Type]]
- → Realisation: [[REQ2 - Choosing a tariff item on basis of Term limits]]
- ← Dependency: [[{MOD}ALG_Early repayment calculation A1]]
- ← Dependency: [[11.081 Prolong insurance contracts]]
- ← Dependency: [[08.348 Calculate Insurance offer parameters]]
- ← Dependency: [[01.478 Show supposed debt for CEL contract (UseCase 1876077)]]

## 📊 Appears In (20 diagrams)

- Custom: Business Rules
- Custom: Business Rules
- Custom: Calculate Product Offer - Auxiliary evaluations
- Custom: PCG-5010 New Limit Value Base Type and Limit Value for POS Tariff
- Custom: PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Custom: PCG-5620 BRPH-2423 - Debt Purchase Support in HOSEL - POC
- Use Case: Activate Insurance on related CL Contract disbursement
- Use Case: CHDDR request creation - externally
- Use Case: CHDDR request creation - via GUI
- Use Case: Checking Terms of Loan Service
- Use Case: CLM-6044 Activate Insurance on related CL Contract disbursement
- Use Case: Common for Early repayment Request and Processing 
- Use Case: Cooling-off period processing
- Use Case: Debt calculator
- Use Case: Fees-back service evaluation and processing
- Use Case: Insurance prolongation
- Use Case: Insurance Service Offers API - Use Case Model
- Use Case: Insurance Service Offers UI - Use Case Model
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
