---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753469
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate DDS amount from DD request

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

This rule describes all possible methods how to calculate amount for direct debit statements from DD request
from external system.

Input:

	
- DDSRequestDto


Algorithm:
Calculation is defined by DDSRequestDto.type:

	
- AMOUNT - it returns directly DDSRequestDto.amount


	
- DEBT_WITH_PENALTIES - sum of unpaid amounts of all overdue installment parts, i.e. Sum(Installment_Part.Amount - Installment_Part.Aamount_Paid)
	
- DEBT_WITHOUT_PENALTIES - sum of unpaid amounts of overdue installment parts which belongs to standard installment (Installment.Installment_Type = 'Standard')  i.e. Sum(Installment_Part.Amount - Installment_Part.Aamount_Paid)


Find overdue installment parts:

	
- System finds all installment parts satisfying following conditions:
- the installment part belongs to the contract (Installment_Part->Installment[where Active = true]->Contract) where Contract.Code = DDSRequestDto.contractCode
- installment part's due date is lower or equal to current date, i.e. Installment_Part.Installment.Due_Date <= current date
- installment part is not fully paid, i.e. Installment_Part.Amount.Value > Installment_Part.Aamount_Paid.Value


Output:

	
- Financial amount

## 🔗 Connections (2)

- → Dependency: [[REQ#1 - DDS request processing]]
- ← Dependency: [[05.271 Process DDS request]]

## 📊 Appears In (1 diagrams)

- Use Case: DDS requests from external systems
