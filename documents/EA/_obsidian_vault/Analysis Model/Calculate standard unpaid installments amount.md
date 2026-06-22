---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753474
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate standard unpaid installments amount

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

- System finds all installment parts satisfying following conditions:
- installment part's due date is lower or equal to due date of the given installment, i.e. Installment_Part.Installment.Due_Date <= Installment.Due_Date
- the installment part belongs to the same contract (Installment_Part->Installment->Contract) as the given installment
- installment part is not fully paid, i.e. Installment_Part.Amount.Value > Installment_Part.Aamount_Paid.Value
- installment part belongs to standard installment (Installment.Installment_Type = 'Standard')
	
- System calculates the debt as sum of unpaid amounts of found installment parts, i.e. Sum(Installment_Part.Amount - Installment_Part.Aamount_Paid)

## 🔗 Connections (1)

- → Generalization: [[Calculate DDS amount]]

## 📊 Appears In (1 diagrams)

- Use Case: Direct Debit statements
