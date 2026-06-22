---
type: GUIElement
stereotype: "checkbox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface"
domain: "Modules"
element_id: 1872086
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Use Financing Scheme

> **Type**: GUIElement · **Stereotype**: «checkbox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface

## 📝 Notes

LDM: Product.UseFinancingScheme
Set default value = False
Visible only if 

	
- GlobalParameter.UseFinancingScheme = True


	
- Product.ProductProfile.ProductType = REL OR (Product.ProductProfile.ProductType = CEL and GlobalParameter.UseFinancingSchemeCEL = True) 


	
- Product.ProductProfile.IsDebit = false

(all the conditions must be satisfied)

Localization code: PRD_UseFinancingScheme

## 📊 Appears In (1 diagrams)

- Custom: Create product
