---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model"
domain: "Analysis Model"
element_id: 1701839
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check charged penalty is not paid

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Checking Terms of Loan Service/Use Case Model

## 📝 Notes

Description: 
The rule describes checking that charged penalty for contract having "CHECKTL" service has been paid.

Input: 

	
- LSR - Loan Service Request where Request Type = "CHECKTL" and Current Status = "CREATED"
	
- Installments - Contract.Installments


Output: 

	
- Result


Steps:
For each LSR -> Charged Fee To Request.Amount check that is not paid by comparing Installments.installment -> Installment Part.Amount Paid < Installment Part.Amount where Installment Part -> Tariff Item = LSR -> Charged Fee to Request -> Tariff Item and installment.Active = true
- if all Charged Fee To Request.Amount are not paid then return Result = "NOT_PAID" (penalty not paid) 
   else if 1 to all-1 Charged Fee To Request.Amount are paid then Result = "PAID_PARTIALLY" 
   else Result = "PAID"

## 🔗 Connections (1)

- ← Dependency: [[08.407 Evaluate CheckTL fulfillment common]]

## 📊 Appears In (1 diagrams)

- Use Case: Checking Terms of Loan Service
