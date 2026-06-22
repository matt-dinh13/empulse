---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model"
domain: "Analysis Model"
element_id: 1874224
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Overdue Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Logical Data Model

## 📝 Notes

It is structure of one unpaid Installment Part Type which is calculated either from:

	
- the overdue Installment Parts of the original active STANDARD Installments having Due Date < ER Due Date and (Amount - Amount Paid > 0)
	
- or Installment Parts of the original active EXTRAORDINARY Installments having (Amount - Amount Paid > 0)

## 🔗 Connections (1)

- → Aggregation: [[Overdue Items (Class 1874219)]]

## 📊 Appears In (1 diagrams)

- Logical: Early repayment result

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial amount |  |
| Part Type | Installment Part Type |  |
| Tariff Item | Tariff Item Type |  |
| Penalization start date | Date |  |
| Penalization end date | Date |  |
