---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803471
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Min Installment Rounding Scale

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

Product.ProductVariant.RevolvingLoanProductVariant.MinInstallmentRoundingScale
If ProductProfile.IsDebit = false then

	
- visible = true
	
- mandatory

else

	
- visible = false


	
- set MinInstallmentRoundingScale = 0

Localization code: PRD_MinInstalmentRoundingScale

## 🔗 Connections (2)

- → Dependency: [[Rounding scale]]
- → Dependency: [[Rounding cross validation]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
