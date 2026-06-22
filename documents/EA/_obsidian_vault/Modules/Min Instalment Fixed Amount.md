---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803483
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Min Instalment Fixed Amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: RevolvingLoanProductVariant.MinInstalmentFixedAmount
If ProductProfile.IsDebit = false then

	
- visible = true
	
- mandatory

else

	
- visible = false


	
- set MinInstallmentFixedAmount = 0

Localization code: MinInstalmentAmount

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Financial amount _= 0 (Requirement 1789776)]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
