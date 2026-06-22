---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Use Case Model"
domain: "Analysis Model"
element_id: 1869773
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate fee included in operation for PER

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Use Case Model

## 📝 Notes

{ADD IS-2003} 
Rule describes calculation of fee amount which should be charged for PER shortened terms variant. This fee has to be set in Installments included in operation.

Input:
- Contract 
- PER result

Output:
- Fee Included in Operation
 

	
- System checks tariff item types set in Installment Included In Operation where installment part type = 'F' and recalculation reason = 'PR'. If no tariff item is found, use case ends.
	
- For found tariff item type codes, system search monthly Fee amount in Financial Parameter Items
	
- System calculates Covered Principal = PER result.Client payment - Nearest Payable Installment - Total Overdue Installments + Prepaid Amount + Total Prepayments - PER fee
	
- System calculates Number of Shortened Terms =  Covered principal/(Financial Parameters.Annuity + Fee amount) and round it to whole number
	
- System calculates Fee Included in Operation amount = Fee Amount * Number of Shortened Terms

## 🔗 Connections (1)

- ← Dependency: [[Calculate Partial ER preview - Step2]]

## 📊 Appears In (2 diagrams)

- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
