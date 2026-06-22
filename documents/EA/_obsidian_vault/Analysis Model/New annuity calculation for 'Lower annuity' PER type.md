---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869779
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 New annuity calculation for 'Lower annuity' PER type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

Steps:
DayCountMethod = FP.DayCountMethod

1. calculate remaining term of the installment schedule:
New Term = FP.Term - installment number of active installment having due date = ERR.ER Due Date and Installment.Type = 'STANDARD'

2. If FP.Installment Schedule Method != 'IS_ALG_EQ_PRINC' (all IS algorithm types except Equal principal)

	
- calculate New Annuity by Annuity calculation with parameters
- DayCountMethod, 
- AIR (interest rate) = FP.Interest Rate
- TERM (number of terms) = New Term
- Annuity Base Amount = New PCA
- Installment Schedule Method = FP.Installment Schedule Method
- StartDate = ERR.ER Due Date
- FirstDueDate = ERR.ER Due Date + 1 month


3. If FP.Installment Schedule Method = 'IS_ALG_EQ_PRINC'

	
- calculate New Principal
New Principal = New PCA/New Term
	
- calculate New Annuity as
New Annuity = New Principal + (New PCA * (Interest Coefficient (by Interest factor ACT with parameters: DayCountMethod, SIP = PER Result.PER Due Date, EIP = SIP + 1month, AIR = FP.Interest Rate) - 1); [roundingScale], [roundingMethod] (Notice: This is only value of an annuity for the first installment)


4. Return New Annuity

## 🔗 Connections (4)

- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- → Dependency: [[Interest factor ACT]]
- → Dependency: [[Annuity calculation]]
- ← Dependency: [[Calculate Partial ER preview - Step2]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
- Use Case: PER request processing
