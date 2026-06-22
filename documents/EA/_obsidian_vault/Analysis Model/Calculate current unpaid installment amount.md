---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753475
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate current unpaid installment amount

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

- System finds all installment parts of selected installment (i.e. parts which satisfy following condition - InstallmentPart.Installment.ID = Installment.ID)
	
- System calculates the debt as sum of unpaid amounts of found installment parts (i.e. sum(InstallmentPart.Amount - InstallmentPart.AmountPaid))

## 🔗 Connections (1)

- → Generalization: [[Calculate DDS amount]]

## 📊 Appears In (1 diagrams)

- Use Case: Direct Debit statements
