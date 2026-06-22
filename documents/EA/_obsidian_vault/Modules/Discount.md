---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface"
domain: "Modules"
element_id: 1825318
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Discount

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/COMMON for Subvention/User Interface

## 📝 Notes

LDM: Subvention.Discount
Default value is in GlobalParameter.SubventionDiscountDefault (BL_DISCOUNT_DEFAULT)
If the Discount is set to True then set field AllocationToClient to 100%. 
For Service Subvention set Subvention.Discount = False and hide.
If Subvention.Purpose is not STANDARD then set Discount to false and disable.
Localization code: PRD_Discount

## 📊 Appears In (1 diagrams)

- Custom: Subvention-Set
