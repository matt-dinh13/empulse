---
type: Requirement
stereotype: "Business rule"
package: ""
domain: "_Uncategorized"
element_id: 1851705
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 ALG_Get excluded Installment part

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: N/A

## 📝 Notes

{ADD CBL-4448 PAYM-1703}
This rule determines which Installment_Parts (and their related Tariff_Item_Types) will be excluded from calculation used for some type of manipulation with the Installment Schedule (Recalculation reason) (e.g. Early repayment, Pay off contract, etc.).
The rules are set in the Installment_Excluded_From_Operation entity. Valid setting is determined as follow:

	
- find Product related to the given Contract
	
- find the product's Terms_And_Conditions valid in the moment of contract creating (Contract.Date_Created)
	
- find all Installment_Parts which are not allowed for appropriate operation (defined by Installment_Excluded_From_Operation) by the Terms_And_Conditions. Only the active Terms_And_Conditions entity is searched.

Notice: All Installment_Parts (and their related Tariff_Item_Types), which should not be involved into calculation, must be set in the Installment_Excluded_From_Operation entity.
Setting is possible by data manipulation only (No user interface is enabled.)
