---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1708946
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 {MOD}Inicialization of Product Sets for selection in Product calculator

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

List of Product Sets contains following items:

	
- Let SAL_Produc is set of all products currently assigned to the salesroom assigned to currently logged user, which are currently valid (current date is in interval <Product.ValidFrom, Product.ValidTo>.
	
- Allowed Product Sets are defined as a unique set of all active {DEL PCG-1156}SAL_Product.ProductProfile.ProductSet{/DEL}{ADD PCG-1156}SAL_Product.Product.ProductSet with ProductSet.Type = SELECTION{/ADD}.
