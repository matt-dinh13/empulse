---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803468
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Min Instalment rate

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: RevolvingLoanProductVariant.MinInstalmentFixedAmount
If ProductProfile.IsDebit = false then

	
- visible = true
	
- mandatory

else

	
- visible = false
	
- set MinInstallmentRate = 0

Localitazion code: MinInstalmentRate

## 🔗 Connections (2)

- → Dependency: [[{MOD}Percentage]]
- → Dependency: [[Mandatory (Requirement 1789779)]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
