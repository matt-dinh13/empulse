---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874219
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Overdue Items

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

The structure keeps array of:

	
- Installment Parts of the standard Installment of the original Installment schedule with due date < ER Due Date
	
- an extraordinary Installments with Installment Part.Part Type = Penalty or Fee.

If no such item exists for mentioned due date, the structure is empty.

## 🔗 Connections (2)

- ← Aggregation: [[Overdue Item (Class 1874224)]]
- → Aggregation: [[Early Repayment Result]]

## 📊 Appears In (1 diagrams)

- Logical: Early repayment result

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Sum of Fees | Financial Amount |  |
| Sum of Penalties | Financial Amount |  |
