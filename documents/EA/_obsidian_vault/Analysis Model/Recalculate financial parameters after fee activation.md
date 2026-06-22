---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model"
domain: "Analysis Model"
element_id: 1878742
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Recalculate financial parameters after fee activation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model

## 📝 Notes

{ADD IS-2061}
This rule describes calculation new financial parameters of the contract when fee is activated after contract sign (for example insurance fee).

Input:

	
- activateFeeRequest
	
- contractCode
	
- original financial parameters
	
- active installments


Output:

	
- NewFinancialParameters (NFP)


Steps:

	
- System get TariffItemCode from input parameters and find tariff item properties. If no tariff item is found, error message is thrown (Tariff item does not exists) and use case ends.
	
- - If tariff item type has set charging periodicity IN INSTALLMENT and flag TO PRINCIPAL exists, premium amount in principal is calculated as Premium amount to principal = activateFeeRequest.amount
- Else if tariff item type has set charging periodicity IN INSTALLMENT and flag TO PRINCIPAL does not exists:
{ADD IS-2341} -- If activateFeeRequest.recalculateFee = FALSE or null, then{/ADD}monthly insurance fee is calculated as Monthly insurance fee = activateFeeRequest.amount
{ADD IS-2341} -- Else if activateFeeRequest.recalculateFee = TRUE, then monthly insurance fee is calculated as Monthly insurance fee = activateFeeRequest.amount/financial parameters.Terms{/ADD}
- Else error message is thrown (Invalid periodicity) and use case ends.
	
- System calculates new Provided credit amount = Provided credit amount + Premium amount to principal
	
- System finds first active installment with due date >= activateFeeRequest.activationDate. If no installment is found, error message is thrown (No future installments) and use case ends.
	
- If activation installment number > 1, system calculates Past principal = sum of active installment parts type principal with due date < activation installment (installment. active = 1 -> installment part.type = S and installment.due date < activation date).
	
- New Provided credit amount as new Provided credit amount - Past principal
	
- System calculates New Installment count= financial parameters.terms - activation installment number + 1
	
- System set New First due date = activateFeeRequest.activation date
	
- If activation installment number > 1, system sets Loan providing date = original financial parameters.loan providing date and Sign date = contract.sign date.
Else system sets New Loan providing date =  New First due date - 1 month and New Sign date = New First due date - 1 month.


	
- If Premium amount to principal > 0 or Past principal > 0, system recalculates New Annuity amount by calling Annuity calculation rule with new financial parameters:
- AIR (interest rate) = FP.Interest Rate
- TERM (number of terms) = New Installment count
- Annuity Base Amount = New Provided credit amount
- Installment Schedule Method = FP.Installment Schedule Method 
- Day Count Method = FP.DayCountMethod
- StartDate = New Loan providing date 
- FirstDueDate = New First due date


	
- System calculates New Total monthly payment amount = original monthly installment amount - original annuity amount + new Annuity amount + Monthly insurance fee.
	
- System returns new financial parameters (NFP) as follow:
- NFP.ProvidedCreditAmount = New Provided credit amount
- NFP.Annuity = New Annuity amount
- NFP.FirstDueDate = New First due date 
- NFP.LoanProvidingDate = New Loan providing date (start of interest period for the new installment schedule)
- NFP.TotalMonthlyPayment = New Total monthly payment amount

## 🔗 Connections (1)

- ← Dependency: [[03.031 Regenerate installment schedule after fee activation]]

## 📊 Appears In (1 diagrams)

- Use Case: Generate installment schedule
