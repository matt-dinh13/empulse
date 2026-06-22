---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model"
domain: "Analysis Model"
element_id: 1857004
diagrams: 2
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Back Office Installments

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model

## 📝 Notes

Every installment item will have 2 lines in the table. First line is header and second line is body. For more information see the grid attributes description.
Header

	
- order number - numbering shall start from "1" and will increment for each next installment by one. Includes STANDARD installments, as well as EARLY_REPAID and TERMINATED. Numbering of EXTRAORDINARY installments (e.g. standalone penalty or fee) shall start according to numeration from "101" and shall not depend on order numbering of monthly installments


	
- grid.Type
	
- {ADD: CBL-11517} grid.Charging reason (optional) - displayed only when row exist in bsl_installment_change_log for installment {/ADD}
	
- grid.Remove

Body

	
- grid.Due date
	
- grid.DPD - see DPD visibility conditions
	
- grid.Amount
	
- grid.Part_type - see Coloring conditions, Naming conditions, Tooltip condition
	
- grid.Part_amount - see Coloring conditions
	
- grid.Status - see Coloring conditions
	
- grid.Splitted_amount - see Coloring conditions

Coloring conditions - If the Installment_part is paid, then text is green (with icon). When after due date, then text is red (with icon)

Naming conditions - if the installment_part is EXTRAORDINARY and tariff item usage type = SAI(KZ sanction interest), than tariff item name is displayed 
                                   - if the installment usage type is PHI, than tariff item name (IN - "RBI Moratorium Interest") is displayed
                                   - {ADD CBL-13603 IS-1353} if the installment tariff item type code = PHIO2, than tariff item name (IN - "RBI Moratorium Interest 2") is displayed{/ADD}
                                   - {ADD CBL-16762 IS-1671} IN - if the installment tariff item type code is in (PI_DPD05, PI_DPD15, PI_DPD30, PI_DPD60, PI_DPD90), than "Penal interest" is displayed{/ADD}

DPD visibility conditions - hidden if DPD = 0, othervise look at 

Tooltip condition - if Tariff Item of the installment_part exists, tooltip with Tariff Item.Type Code is showed

When row in installments grid is selected, then paired payments rows in payments grid are colored.

Default order: Installments are sorted by algorithm described in the ALG_Get sorted installment parts. 
Paging: No.
Scrolling: No.

## 📊 Appears In (2 diagrams)

- Custom: Back Office panel
- Custom: PAYM-1728 (CBL-4595) Change of the last due date

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}Due date | Date |  |
| Amount | Financial amount |  |
| DPD | Number (3,0) |  |
| Order number |  |  |
| Part amount | Financial amount |  |
| Part type | Enumeration – Installment part type |  |
| Remove | Button |  |
| Splitted amount | Financial amount |  |
| Status | text |  |
| Type | text |  |
| Charging reason | text |  |
