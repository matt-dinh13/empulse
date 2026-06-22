---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803472
diagrams: 1
connections: 4
tags:
  - guielement
  - modules
---

# 🖥️ Credit amount minimal

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: PRODUCT.PRODUCT_VARIANT.CreditAmountMin
Visible and mandatory for all products except for Debit cards, i.e. ProductProfile.IsDebit = false
Localization code: PRD_CreditAmountMin

## 🔗 Connections (4)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Credit amount]]
- → Dependency: [[Cash payment cross validations]]
- → Dependency: [[Financial amount _= 0 (Requirement 1789776)]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
