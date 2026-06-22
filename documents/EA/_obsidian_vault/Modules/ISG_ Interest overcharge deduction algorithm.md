---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1303994
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ISG: Interest overcharge deduction algorithm

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule/Analytical Model/Use Case Model

## 📝 Notes

This technical use case ensures recalculation of the installment schedule so that interest overcharge (i.e. interest charged between contract sign date and date when the client receive money) is deducted from the last installment (or installments) interests.
The calculation is raised by importing of disbursement confirmation file where paid date is used as date when the client receive money (i.e. loan providing date). This feature is only effective for CASH LOAN product types with 30/360 way of annuity calculation and the Basic/Extended1 algorithms for generation of installment schedule.
A usage of the feature is switched on/off in Global Parameters.Deduct Interest Overcharge

Input:

	
- Financial Parameters
	
- Loan Disbursement Date


FP = Financial Parameters
LPD = Loan providing date = FP.Loan Providing Date
FDD = First due date = FP.First Due Date
LDD = Loan Disbursement Date

Steps:

	
- If LDD < LPD or LDD > FDD then system algorithm ends.


////////

	
- System gets Contract Installments (IS) and their Installment Parts (IP)
	
- If an active IS.Recalculation Reason = ID (Interest overcharge deduction) exists in the Installments then
use case ends (No error is returned)
	
- If FP.AIR = 0 then use case ends (No error is returned)
	
- System calculates interest overcharge for the first interest period of the installment schedule as follow:
InterestOvercharge = ROUND(IP.Amount/30 * DAYS(Loan Disbursement Date - FP.Loan Providing Date); [AnnuityRoundingScale, AnnuityRoundingMethod]); where IP.Amount is amount of interest from the first active standard installment (i.e. IP.Amount having IS.Installment Type = STANDARD and IS.Active Flag = 1 and IS.Installment Number = 1 and IP.Part Type = I); the AnnuityRoundingScale and AnnuityRoundingMethodis are taken from Global Parameters
If IP.Amount is 0/NULL, or IP.Part Type = I does not exist then use case ends and an error is returned: MSG_InterestOverchargeCalculationFails; e.g. Interest overcharge cannot be calculated for the contract ${Contract Code}.
	
- System sets N = FP.Terms (the last installment) and deducts calculated InterestOvercharge from interest parts of last installments until InterestOvercharge = 0:
Get IP.Amount where (IS.Installment Number = N and IP.Part Type = I) and set:
- If InterestOvercharge >= IP.Amount then  IP.Amount = 0; InterestOvercharge = InterestOvercharge - IP.Amount
- If InterestOvercharge < IP.Amount then  IP.Amount = IP.Amount - InterestOvercharge; InterestOvercharge = 0
- If InterestOvercharge > 0, set N = N -1 and continue with modification of previous installment
	
- If an installment except the last one is reduced (N < FP.Terms), consolidation of annuity with the help of principal is done:
Set M = N --start from the first modified installment
Get the last principal amount: PrincipalLast = IP.Amount where (IS.Installment Number = M and IP.Part Type = S) -- only the last principal is used to consolidation
Do while M < FP.Term and PrincipalLast > 0
- calculate missing principal of M modified installment: PrincipalDiff = FP.Annuity - (IP.AmountS where (IS.Installment Number = M and IP.Part Type = S) + IP.AmountI where (IS.Installment Number = M and IP.Part Type = I))
- If PrincipalDiff <= PrincipalLast then -- increase M principal by missing amount of principal and decrease used part of last principal
-- set IP.AmountS = IP.AmountS + PrincipalDiff; PrincipalLast = PrincipalLast - PrincipalDiff
- else set IP.AmountS = IP.AmountS + PrincipalLast;  PrincipalLast = 0
- Set M = M + 1 -- take next modified installment
	
- All recalculated Installments from previous step are regenerated with the new values of the Installment Parts, i.e.:
- System searches for Incoming Payments paired with active Installment Parts of the Contract Installment having IS.Installment Number >= N. The collection of the found Incoming Payments is unpaired by calling of 05.200 Perform decoupling use case
- System cancels all active standard Installments having Installment Number >= N (Installments where I.Installment Type = 'STANDARD' and Installment.Active = TRUE and INSTALLMENT.Installment Number >= N) as follow:
-- IS.Active = 'FALSE'
-- IS. Deactivated In Version = get MV by Maximal Version of Installment Schedule incremented by 1
-- IS.Recalcualtion Reason = 'ID' (Interest Overcharge Deduction)
- System generates new Installments with installment parts for Installment Number from N to FP.Term based on the canceled in previous step:
-- IP.Amount = calculated IP.Amount from step #7; for IP.Amount = 0 is not created particular Part Type
-- IS.Installment Version = MV; IS.Deactivated In Version = NULL
-- other parameters of installments and IP.Part Type in (F, P) stay the same like the canceled installments
	
- System performs coupling of contract payments by calling of UC 05.180 Perform coupling payment with installment for the contract.
	
- System updates Contract Financial Parameters (FP), i.e. archives the original version of the Contract.Financial Parameters and creates a new one as follow:
- FP.Total Payment Per Credit = FP.Cash Payment + Sum of Installment.Installment Part.Amount having Installment Type = STANDARD and Installment.Active Flag = 1)
- Presented Interest Rates are recalculated by the rule Recalculate Presented Interest rates on financial parameters change with parameters: Contract Installment Schedule, Contract Financial Parameters and saved into FP.Contract Presented Interest Rate
	
- If an error occurred within the installment schedule regenerating, scenario continues with EW - Installment schedule regeneration fails exception
	
- System generates a system event RegeneratedInstallmentScheduleSE with a list containing the created (only stored) and canceled installments as a parameter.

## 🔗 Connections (1)

- ← Dependency: [[ISG_ Generate installment schedule algorithm]]

## 📊 Appears In (1 diagrams)

- Use Case: ISG - Generate installment schedule
