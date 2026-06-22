---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model"
domain: "Analysis Model"
element_id: 1857001
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Call Center Installments

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model

## 📝 Notes

Every installment item will have 2 lines in the table. First line is header and second line is body.
Header

	
- order number - numbering shall start from "1" and will increment for each next installment by one. Includes STANDARD installments, as well as EARLY_REPAID and TERMINATED. Numbering of EXTRAORDINARY installments (e.g. standalone penalty or fee) shall start according to numeration from "101" and shall not depend on order numbering of monthly installments


	
- grid.Type
	
- grid.Remove

Body

	
- grid.Due date
	
- grid.DPD - hidden if DPD = 0
	
- grid.Amount
	
- grid.Status  - see Coloring conditions
	
- grid.Paid_amount - see Coloring conditions
	
- grid.Paid_date - see Coloring conditions

Coloring conditions - If the whole Installment is paid, then text is green (with icon). When after due date, then text is red (with icon)

Default order: Installments are sorted by algorithm described in the ALG_Get sorted installment parts. 
Paging: No.
Scrolling: No.

## 📊 Appears In (1 diagrams)

- Custom: Call Center panel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Due date | Date |  |
| Amount | Financial amount |  |
| Paid date | Date |  |
| DPD | Number (3,0) |  |
| Remove | Button |  |
| Paid amount | Financial amount |  |
| Status | text |  |
