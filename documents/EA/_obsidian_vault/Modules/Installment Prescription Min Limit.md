---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803449
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Installment Prescription Min Limit

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

Product.ProductVariant.RevolvingLoanProductVariant.InstallmentPrescriptionMinLimit

If ProductProfile.IsDebit = false then

	
- visible = true
	
- mandatory

else

	
- visible = false


	
- set InstallmentPrescriptionMinLimit  = 0


Localization code: PRD_InstalmentPrescriptionMinLimit

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Financial amount _ 0]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
