---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869777
diagrams: 5
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 New term calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

Steps:
1. If FP.Installment Schedule Method != 'IS_ALG_EQ_PRINC' (all IS algorithm types except Equal principal)

	
- if FP.Installment Schedule Method = 'IS_ALG_BASIC'
- get CAPR (compounded annual percentage rate) as FP.interestRate
- get simple monthly interest rate MIR = ((1+CAPR)^(1/12))-1
else MIR = FP.InterestRate/12
	
- If MIR = 0 then
- New Term = ROUNDUP(New PCA/Original Fix Principal; 0)
Else New Term = ROUNDUP(ABS(LN(1- New PCA * MIR/ FP.Annuity)/LN(1/1+MIR)); 0)


2. If FP.Installment Schedule Method = 'IS_ALG_EQ_PRINC'

	
- get Original Fix Principal
	
- New Term = ROUNDUP(New PCA/Original Fix Principal; 0)


3. Return New Term

## 🔗 Connections (3)

- ← Dependency: [[Restructuring offer recalculation]]
- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← Dependency: [[Calculate Partial ER preview - Step2]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: CBL-9759 (CLM-3088) Loan restructuring offer calculation update
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
- Use Case: PER request processing
