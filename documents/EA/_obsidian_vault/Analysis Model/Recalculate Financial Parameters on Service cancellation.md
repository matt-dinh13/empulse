---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model"
domain: "Analysis Model"
element_id: 1833434
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Recalculate Financial Parameters on Service cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model

## 📝 Notes

{ADD CLM-2053 /}
This rule describes calculation new financial parameters of the contract when a Contract Service is to be cancelled.
Input:

	
- Contract
	
- ContractService


Output:

	
- NewFinancialParameters (NFP)
	
- Result (boolean)


	
- WarningMessage (optional)



	
- Set Result = FALSE (boolean)
	
- Get active Financial Parameters (FP) of the Contract
	
- Get OriginalFeeAmountInPrincipal or OriginalMonthlyFee by Get Tariff Items used for a Service fees with ContractService as parameter
If no OriginalFeeAmountInPrincipal neither OriginalMonthlyFee is obtained, scenario returns Result =TRUE, WarningMessage = MSG_SERFeeForServiceNotFound (e.g. "No fee for Service found".) and ends -- no Tariff Item for Service is found, the FP/installment schedule is not to be recalculated
	
- System checks if an active Installment on the contract exists
- If contract.Status != 'N' (Signed) and no active Installment is found, scenario returns Result =TRUE and WarningMessage = MSG_InstallmentScheduleClosed and ends -- signed contracts without active installments can continue
- If an active Installment is found, system checks if installment schedule of the contract has been already closed according to rule Check if Installment Schedule is Closed. If TRUE is returned, scenario returns Result =TRUE and WarningMessage = MSG_InstallmentScheduleClosed and ends -- if installment schedule is closed, the FP/installment schedule is not to be recalculated
	
- Calculate NewFinancialParameters (NFP) based on the current FP as follow:
- If PrincipalPremium is not NULL and is greater than 0
-- NFP.ProvidedCreditAmount = FP.Provided Credit Amount - OriginalFeeAmountInPrincipal
-- NFP.Annuity = calculate a new annuity by Annuity calculation with parameters
--- AIR (interest rate) = FP.Interest Rate
--- TERM (number of terms) = FP.Term
--- Annuity Base Amount = ProvidedCreditAmount
--- Installment Schedule Method = FP.Installment Schedule Method
--- Day Count Method = FP.DayCountMethod
- NFP.TotalMonthlyPayment = Annuity + Sum(FP.Financial Parameter Items.Amount related to Tariff Item ->Tariff Item Type.Charging Periodicity = IN_INSTALLMENT) - OriginalMonthlyFee (if OriginalMonthlyFee is not NULL and is greater than 0)  --i.e. the new Annuity plus all fees charged into contract installments minus the service fee is to be cancelled
	
- Returns Result =TRUE and NFP

## 🔗 Connections (1)

- → Dependency: [[Get Tariff Items used for a Service fees]]

## 📊 Appears In (2 diagrams)

- Use Case: Service - Contract Service management via API
- Use Case: Service - Contract Service management via UI
