---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803431
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Min Installment Rounding

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

Product.ProductVariant.RevolvingLoanProductVariant.MinInstallmenRounding.Name
If ProductProfile.IsDebit = false then

	
- visible = true
	
- mandatory

else

	
- visible = false


	
- set MinInstallmentRounding = UP

Localization code: PRD_MinInstalmentRounding

## 🔗 Connections (2)

- → Dependency: [[Rounding cross validation]]
- → Dependency: [[Rounding (Enumeration 1238151)]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
