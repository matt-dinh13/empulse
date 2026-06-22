---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Use case model"
domain: "Analysis Model"
element_id: 1833578
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate new installment amount on insurance cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Insurance finishing/Use case model

## 📝 Notes

This rule describes calculation new financial parameters of the contract when insurance is to be cancelled.
Input:

	
- Contract
	
- ContractInsuranceService
	
- {ADD CSI-2366}ServiceDefinition{/ADD}


Output:

	
- NewFinancialParameters (NFP)
	
- {ADD CSI-2450}OriginalFeeAmountNotInPrincipal{/ADD}
	
- Result (boolean)


	
- ErrorMessage (optional)



	
- Set Result = FALSE (boolean)
	
- Get active Financial Parameters (FP) of the Contract


	
- Get OriginalPremiumAmountInPrincipal and OriginalMonthlyInsuranceFee and {ADD CSI-2450}OriginalFeeAmountNotInPrincipal{/ADD} by Get Tariff Items used for Insurance premium with ContractInsuranceService as parameter
If {ADD CSI-2450}If ServiceParameters.Refund On Manual Termination <> REFUND_ON_CANCELLATION and {/ADD} no OriginalPremiumAmountInPrincipal neither OriginalMonthlyInsuranceFee is obtained, scenario returns ErrorMessage = MSG_CELInsuranceNoTariffForInsurance, Result =TRUE and ends -- no Tariff Item for insurance found, the installment schedule is not to be recalculated


	
- System checks if an active Installment on the contract exists
- If contract.Status != 'N' (Signed) and no active Installment is found, scenario returns ErrorMessage = MSG_InstallmentScheduleClosed and ends -- signed contracts without active installments can continue
- If an active Installment is found, system checks if installment schedule of the contract has been already closed according to rule Check if Installment Schedule is Closed. If TRUE is returned, scenario returns Result =TRUE and ErrorMessage = MSG_InstallmentScheduleClosed and ends -- if installment schedule is closed, do not continue
	
- {ADD CSI-2366}If ServiceParameters.Refund On Manual Termination = REFUND_ON_CANCELLATION, then calculate NewFinancialParameters (NFP) as follow:
- If OriginalPremiumAmountInPrincipal is not NULL and > 0
--  NFP.Net Credit Amount = FP.Net Credit Amount + OriginalPremiumAmountInPrincipal  -- Net Credit Amount is increased by refunded amount, Provided Credit Amount stays the same 
- Else NFP.Net Credit Amount = FP.Net Credit Amount
- NFP = FP -- remaining FPs stay the same{/ADD}
	
- {ADD CSI-2366}If ServiceParameters.Refund On Manual Termination <> REFUND_ON_CANCELLATION, then {/ADD}calculate NewFinancialParameters (NFP) based on the current FP as follow:
- If PrincipalPremium is not NULL and is greater than 0
-- NFP.ProvidedCreditAmount = FP.Provided Credit Amount - OriginalPremiumAmountInPrincipal
-- NFP.Annuity = calculate a new annuity by Annuity calculation with parameters
--- AIR (interest rate) = FP.Interest Rate
--- TERM (number of terms) = FP.Term
--- Annuity Base Amount = ProvidedCreditAmount
--- Installment Schedule Method = FP.Installment Schedule Method
--- Day Count Method = FP.DayCountMethod
- NFP.TotalMonthlyPayment = Annuity + Sum(FP.Financial Parameter Items.Amount related to Tariff Item ->Tariff Item Type.Charging Periodicity = IN_INSTALLMENT) - OriginalMonthlyInsuranceFee (if OriginalMonthlyInsuranceFee is not NULL and is greater than 0)  --i.e. the new Annuity plus all fees charged into contract installments minus insurance premium is to be cancelled
	
- Returns Result =TRUE and NFP

## 🔗 Connections (4)

- → Dependency: [[Get Tariff Items used for a Service fees]]
- ← Dependency: [[08.111 Cancel contract insurance common]]
- ← Dependency: [[{MOD}11.111 Cancel insurance contract manually]]
- ← Dependency: [[08.451 Get Contract insurance Cancel preview service (UseCase 1878961)]]

## 📊 Appears In (2 diagrams)

- Use Case: Cancellation of Insurance contract options
- Use Case: Contract insurance cancellation
