---
type: Requirement
stereotype: "Validate"
package: ""
domain: "_Uncategorized"
element_id: 1489252
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 Pricing Category validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: N/A

## 📝 Notes

Validation:

	
- PricingCategoryFrom >= 1
	
- PricingCategoryTo >= 1


	
- If both values are defined then PricingCategoryFrom <= PricingCategoryTo 
(MSG_ProdVarPricingCategory)

## 🔗 Connections (2)

- ← Dependency: [[Pricing category from (GUIElement 1803492)]]
- ← Dependency: [[Pricing category to]]
