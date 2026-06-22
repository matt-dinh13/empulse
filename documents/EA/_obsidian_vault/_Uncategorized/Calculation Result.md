---
type: Class
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1081458
diagrams: 0
connections: 2
tags:
  - class
  - _uncategorized
---

# 🔷 Calculation Result

> **Type**: Class
> **Package**: N/A

## 📝 Notes

The entity keeps calculated values of outstanding debt on particular items as well as total amounts for Service. These items are divided to three groups:

	
- Overdue Items - unpaid amounts of installments after due date
	
- Payable Items - amounts of installments before due date which should be paid by Early repayment due date.
	
- Fee- amounts of fees are to be charged for ER


Notice: This entity need not be stored in the system.

## 🔗 Connections (2)

- ← Aggregation: [[Payable Items]]
- ← Aggregation: [[Overdue Items]]
