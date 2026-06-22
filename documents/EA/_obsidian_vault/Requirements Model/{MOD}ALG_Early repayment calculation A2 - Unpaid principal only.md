---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals"
domain: "Requirements Model"
element_id: 1879625
diagrams: 4
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}ALG_Early repayment calculation A2 - Unpaid principal only

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals

## 📝 Notes

Input Parameters:

	
- Contract
	
- ContractService optional
	
- Installment schedule (ISCH) including following data related to contract: {ADD CBL-10443}
- active installments and installment parts
- active incoming payment pairings
- active and paired incoming payments{/ADD CBL-10443}
	
- Due Date of Early Repayment (ERDD)
	
- Date of ER request (ERRD; date when a client's request for ER was created
	
- Recalculation reason (ER_Reason)
	
- Internal Refund Amount
	
- InstallmentScheduleMethod from the provided Contract.Financial Parameters.Installment Schedule Method


Output:

	
- Early Repayment Result object (RESULT) - entity for storing results of calculation


Notes:

	
- FER algorithm taking only unpaid principal into account for calculation of FER amount
	
- this algorithm cancels the not fully paid overdue installments and recreates them with amount equal to originally paid amount
	
- this algorithm does not support the gift payment processing within ER/Consolidation (the unpaid interest, fees and penalties are waived in this case so another bonus service providing does not make sense)
	
- the prerequisite for correct behavior is to have principal specified for recalculation respective recalculation reason (CONS, FER), other part type or tariff items are not taken in account


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


NOTE: to compute the payable installments during FER processing, system should firstly get installments debt from the time of request creation and then compare the credit vs debt

If ERRD is filled, system:
- sums up the incoming payments having Payment.DepositDate >= date of ERRD and Payment.CreationDate > ER.creationDate to PaymentsAfterERRD
- filters these payments out from the ISCH with respective incoming payment pairings
- sets the respective installment parts.PaidAmount = PaidAmount - filtered pairing amount

Calculation of overdue debt
1. System sums all unpaid installment parts type Principal of ISCH (difference between customer paid amount and installment part expected amount (IP.AMOUNT – IP.AMOUNT_PAID)) by their types (I.INSTALLMENT_TYPE; IP.PART_TYPE), having due date < ERDD (INSTALLMENT_PARTs belongs to INSTALLMENTs which have I.DUE_DATE < ERDD and I.ACTIVE = 'TRUE' grouped by I.INSTALLMENT_TYPE; IP.PART_TYPE).
All found Installment Parts are calculated and registered in RESULT.Overdue Items structure by described rules.

Calculation of payable and future debt from standard installments
2. System calculates NI and adds into RESULT.Payable Items all Installment Parts and Tariff Item Types as follows:
	2.1 Payable Item.Part Type = 'S' 
		Payable Item.Amount = Unpaid amount (InstallmentPart.Amount - InstallmentPart.PaidAmount)

3. System calculates FI and adds into RESULT.Payable Items all Installment Parts and Tariff Item Types involved by IIP definition as follows: 
	3.1 FI.Part type = 'S' is involved by IIPT
		Payable Item.Amount = Payable Item.Amount + (NI.Principal.Amount - Payable Item.Amount) + sum of (FI.Principal.Amount)

Calculation of possible ER fees which should be charged at the moment of Early repayment
4. {ADD CBL-30396 CSI-4295}System resolves FER_FEE_SUPPRESSED based on business rule Evaluate FER Fee Exemption with inputs:
       - ContracCode (Loan Contract Code)
       - FERCalculationDate (or ERRD if used as granting moment)
       - FerServiceCode (optional)
       - FerServiceVersion (optional)
Output from the rule:
        - ferFeeSuppressed : boolean   // TRUE = do NOT charge FER fee; FALSE = charge
    If FER_FEE_SUPPRESSED = TRUE: System MUST NOT calculate FER fee tariff items and MUST NOT add them into RESULT.ER Fee Items.
        (Skip step 5 and 6 for FER fee items.)
    Else: Continue with step 5.{ADD/}
5. System finds all tariff items to be charged at the moment of early repayment by calling of Algorithm_Find tariff items by usage with parameters:
	usage = ER_Reason from input (possible only if the codes of recalculation reasons correspond with codes of usage)
	Contract from input
	Contract Service from input
6. System calls for each tariff item from previous step Algorithm: Calculate tariff item amount algorithm with tariff item and ERDD as parameter and calculates tariff items amount (ER fee): 
	All calculated ER fees are registered separately by Tariff Items in RESULT.ER Fee Items structure by described rules.

Calculation of Early repayment amount to pay
7. Total amounts for ER are calculated as is described in the Early Repayment Result object (RESULT)
8. Early repayment result.TotalToPaid = Early repayment result.TotalToPaid - PaymentsAfterERRD
9. System returns Early Repayment Result object (RESULT) as result of calculation

## 🔗 Connections (4)

- ← Dependency: [[{MOD}08.222 Calculate Grace period amount]]
- ← Dependency: [[Early Repayment Algorithm Type]]
- ← Dependency: [[{MOD}03.070 Calculate early repayment amount]]
- → Usage: [[{ADD}Evaluate FER Fee Exemption]]

## 📊 Appears In (4 diagrams)

- Custom: IS-998 (CBL-10543) CET via MobApp and Terminals
- Logical: Full Early Repayment Setting
- Use Case: Calculation of early repayment amount under Grace period
- Use Case: Full early repayment request - via GUI
