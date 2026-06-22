---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals"
domain: "Requirements Model"
element_id: 1879627
diagrams: 10
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}ALG_Early repayment calculation A1

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals

## 📝 Notes

Input Parameters:

	
- Contract
	
- ContractService optional
	
- Installment schedule (ISCH)
	
- Involved Installment Parts (IIP); setting of future installment parts and their Tariff Items to be involved into calculation - see ALG_Get involved Installment part
	
- Excluded Installment Parts (EIP); setting of future installment parts and their Tariff Items to be excluded from calculation - see ALG_Get excluded from Installment part
	
- Due Date of Early Repayment (ERDD)
	
- Date of ER request (ERRD; date when a client's request for ER was created
	
- Recalculation reason (ER_Reason)
	
- Internal Refund Amount
	
- InstallmentScheduleMethod from the provided Contract.Financial Parameters.Installment Schedule Method
	
- OriginalInsuranceAmountInPrincipal (optional)
	
- InsuranceFeeAmountForRefund (optional)
	
- ProcessingFeeAmountInPrincipal(optional)
	
- ConditionForChargingAmount(optional)
	
- {PH only}IncludedInterestBackAmount
	
- {PH only}ExcludedInterestBackAmount


Output:

	
- Early Repayment Result object (RESULT) - entity for storing results of calculation


If Virtual Installment Schedule (VIS) was generated in any superior UC then it is used for every operation in this rule instead of currently valid IS. 

Definitions:

	
- Nearest Installment (NI); Installment parts of the nearest future standard active Installment with due date >= ERDD
	
- Future Installments (FI); Installment parts of the nearest future standard active Installments with due date > ERDD; Installment Part Type = 'OVERPAYMENT' is excluded from calculation)
	
- Future Extraordinary Installments (FX): Installment parts of the nearest future EXTRAORDINARY active Installment with due date >= ERDD


	
- Start of accounting period date (SDD); 
SDD = due date of the standard active installment before the Nearest Installment; 
in case no such installment exists (i.e. ERDD is due date of the first installment) then
If Recalculation reason = 'CO' (for Cooling-off period no accrued interest is calculated) then SDD = ERDD else SDD = Sign date of the contract.


	
- I = Installment entity
	
- IP = Installment Part entity


System determines way of calculation of accrued and  total installment period length (i.e. number of days for that) by InstallmentScheduleMethod as follow:
Accrued period = day count ratio(start date, end date) with respective day count method
Total period = day count ratio(start date, end date) with respective day count method

Calculation of overdue debt
1. System sums all unpaid installment parts of ISCH (difference between customer paid amount and installment part expected amount (IP.AMOUNT – IP.AMOUNT_PAID)) by their types (I.INSTALLMENT_TYPE; IP.PART_TYPE), having due date < ERDD (INSTALLMENT_PARTs belongs to INSTALLMENTs which have I.DUE_DATE < ERDD and I.ACTIVE = 'TRUE' grouped by I.INSTALLMENT_TYPE; IP.PART_TYPE).
All found Installment Parts are calculated and register in RESULT.Overdue Items structure by described rules.
-- dont include excluded typees from alg


Calculation of payable and future debt from standard installments
2. System calculates NI and adds into RESULT.Payable Items all Installment Parts and Tariff Item Types as follows:
2.1 Payable Item.Part Type = 'S' 
- Payable Item.Amount = AccruedPeriod * NI.Principal.Amount/TotalPeriod
2.2 Payable Item.Part Type = 'I'
- Payable Item.Amount = AccruedPeriod * NI.Interest.Amount/TotalPeriod
2.3If NI.Due Date = ERDD then each fee from NI is taken and stored separately by Tariff Item Type as 
- Payable Item.Part Type = 'F'; Exclude fees from alg ALG_Get excluded from Installment part
- Payable Item.Tariff Item = [Tariff Item Type (X)];
- Payable Item.Amount = Fee(X).Amount

3. System calculates FI and adds into RESULT.Payable Items all Installment Parts and Tariff Item Types involved by IIP definition as follows: 
3.1 FI.Part type = 'S' is involved by IIPT

	
- Payable Item.Amount = Payable Item.Amount + (NI.Principal.Amount - Payable Item.Amount) + sum of (FI.Principal.Amount)

If FI.Part type = 'I' is involved by IIPT
if global parameter SeparateFutureInterest = True & FI.Part type = 'I' is involved by IIP then
- Payable Item.Part Type = 'IF'
- Payable Item.Amount = NI.Interest.Amount - (AccruedPeriod * NI.Interest.Amount/TotalPeriod) + sum of (FI.Interest.Amount)
else if global parameter SeparateFutureInterest = False & FI.Part type = 'I' is involved by IIP then
- Payable Item.PartType = 'I'
- Payable Item.Amount = Payable Item.Amount + NI.Interest.Amount - (AccruedPeriod * NI.Interest.Amount/TotalPeriod) + sum of (FI.Interest.Amount)
end if
For each Part type = 'F'  and Tariff Item Type (X) involved by IIP definition the sum of future fees of particular Tariff Item Type is added:
- Payable Item.Amount = Payable Item.Amount + sum of (FI.Fee(X).Amount)

Calculation of possible ER fees which should be charged at the moment of Early repayment
4. {ADD CBL-30396 CSI-4295}System resolves FER_FEE_SUPPRESSED based on business rule Evaluate FER Fee Exemption with inputs:
       - ContractCode (Loan Contract Code)
       - FERCalculationDate (or ERRD if used as granting moment)
       - FerServiceCode (optional)
       - FerServiceVersion (optional)
Output from the rule:
        - ferFeeSuppressed : boolean   // TRUE = do NOT charge FER fee; FALSE = charge
    If FER_FEE_SUPPRESSED = TRUE: System MUST NOT calculate FER fee tariff items and MUST NOT add them into RESULT.ER Fee Items.
        (Skip step 5,6,7 for FER fee items.)
    Else: Continue with step 5.{ADD/}
5. System finds all tariff items to be charged at the moment of early repayment by calling of Algorithm_Find tariff items by usage with parameters:

	
- usage = ER_Reason from input (possible only if the codes of recalculation reasons correspond with codes of usage)
	
- Contract from input


	
- Contract Service from input


6. System calls for each tariff item from previous step Algorithm: Calculate tariff item amount algorithm with tariff item and ERDD as parameter and calculates tariff items amount (ER fee)
7.  If if any tariff item from previous step has flag "CHARGE_CONDITIONALLY", system call rule Get amount of condition for charging. Then system calculate ER fee amount like ER fee amount - ConditionForChargingAmount. If result is < 0, then set ER fee amount = 0. 

	
- All calculated ER fees are registered separately by Tariff Items in RESULT.ER Fee Items structure by described rules.


Calculation of payable and future debt from extraordinary installments
8. For each FX found, values Part Type, Amount and Tariff Item Type, Penalization start date, Penalization End date are added into RESULT.Extraordinary Payable Items structure
--Exclude types from alg ALG_Get excluded from Installment part 
Setting of cancelled amount of insurance premium {DEL IS-1926} charged into principal {/DEL}
- If OriginalInsuranceAmountInPrincipal is NULL, set TotalCancelledInsuranceAmounts = 0, else set TotalCancelledInsuranceAmounts = OriginalInsuranceAmountInPrincipal
- If InsuranceFeeAmountForRefund is NULL, set TotalInsuranceFeeAmountForRefund = 0, else set TotalInsuranceFeeAmountForRefund = InsuranceFeeAmountForRefund
- If ProcessingFeeAmountInPrincipal is NULL, set TotalWaivedFeeAmount = 0, else set TotalWaivedFeeAmount = ProcessingFeeAmountInPrincipal

Calculation of Early repayment amount to pay
9. Total amounts for ER are calculated as is described in the Early Repayment Result object (RESULT)
10. System returns Early Repayment Result object (RESULT) as result of calculation

## 🔗 Connections (7)

- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- ← Dependency: [[{MOD}08.222 Calculate Grace period amount]]
- ← Dependency: [[Early Repayment Algorithm Type]]
- ← Dependency: [[{MOD}03.070 Calculate early repayment amount]]
- → Dependency: [[Algorithm_ Find tariff items by usage]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- → Usage: [[{ADD}Evaluate FER Fee Exemption]]

## 📊 Appears In (10 diagrams)

- Custom: IS-998 (CBL-10543) CET via MobApp and Terminals
- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Logical: Contract Early Termination Setting
- Logical: Cooling-off Period Service definition
- Logical: Full Early Repayment Setting
- Use Case: Calculation of early repayment amount under Grace period
- Use Case: Common for Early repayment Request and Processing 
- Use Case: Cooling-off period processing
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
