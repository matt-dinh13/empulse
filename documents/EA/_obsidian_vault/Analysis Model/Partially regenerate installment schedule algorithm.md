---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model"
domain: "Analysis Model"
element_id: 1878738
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Partially regenerate installment schedule algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model

## 📝 Notes

This algorithm is used to generation of installments from remaining debt in case of the partial early repayment request. It is only used for IS_ALG_BASIC and IS_ALG_EXTEND installment schedule methods.
Inputs:

	
- Contract


	
- Financial Parameters (FP)


	
- Recalculation reason


	
- Installment Version
	
- Installment Number


Used variables:
EIR = FP.IS_interestRate (Effective Interest Rate)
Installment = Financial Parameters.Total Monthly Installment
Outstanding principal = FP.Provided Credit Amount
For rounding of calculated amounts is roundingSchedule parameter obtained 

Steps:

1. Set remaining (not paid) principal as Outstanding principal = FP.Provided Credit Amount

2. If Outstanding principal > 0, system generates remaining standard Installments with Installment Parts (IP) to Outstanding principal amortization as follow:

3. System generates a standard Installment (I) as follow
- I.Contract = reference to Contract from input
- I.Due Date = FP.First Due Date
- I.Customer Due Date = I.Due Date – [DaysBeforeDueDate] system parameter
- I.Installment Number = Installment Number
- I.Version = Installment Version
- I.Installment Type = 'STANDARD'
- I.Active = 'TRUE'
- I.Recalculation Reason = Recalculation reason

IP.Amount for I.Part Type = 'F' (Monthly Fee) is obtained as:
Monthly Fee = FP.Tariff Item.Item Amount
For every fee from FP.Tariff Item from the input one Installment Part record is created.

Interest Installment Part is generated for the Installment:
- IP.Part Type = 'I'
- IP.Amount = Interest = Outstanding principal * EIR (the amount is rounded based on roundingSchedule parameter)
- IP.Amount Paid = 0

Principal Installment Part is calculated on basis of remaining amount of the outstanding principal as:
If Outstanding principal - (Installment - Interest from Interest Installment Part - Sum(Monthly Fee)) < PER Request.Minimal Installment Amount / (1+EIR)

or Outstanding principal + Interest from Interest Installment Part + Sum(Monthly Fee)) < Interest

then 

	
- Principal Installment Part is generated for the final Installment:
- IP.Part Type = 'S'
- IP.Amount = Outstanding principal
- IP.Amount Paid = 0

Else

	
- Principal Installment Part is generated for the Installment:
- IP.Part Type = 'S'
- IP.Amount = Principal = Installment - Interest - Monthly Fee
- IP.Amount Paid = 0


Set remaining principal as Outstanding principal = Outstanding principal - Principal from Principal Installment Part
Set Installment Number = Installment Number + 1
If Outstanding principal > 0 then scenario returns back to 3. step else continues with next step.

4. Function returns list of regenerated Installments from previous steps

## 🔗 Connections (2)

- ← Dependency: [[Generate installment schedule - Basic algorithm]]
- ← Dependency: [[Generate installment schedule - Extended1 algorithm]]

## 📊 Appears In (3 diagrams)

- Use Case: Generate installment schedule
- Use Case: ISG - Generate installment schedule
- Use Case: OVERVIEW - Installment Schedule
