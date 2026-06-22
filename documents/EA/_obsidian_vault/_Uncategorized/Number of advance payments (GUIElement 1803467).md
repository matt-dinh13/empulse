---
type: GUIElement
stereotype: "text"
package: ""
domain: "_Uncategorized"
element_id: 1803467
diagrams: 0
connections: 2
tags:
  - guielement
  - _uncategorized
---

# 🖥️ Number of advance payments

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: N/A

## 📝 Notes

{DEL PCG-1208_1/}
LDM: ClosedEndLoanProduct.ClosedEndLoanProductVariant.AdvancePaymentsNumber
Visible and mandatory only for Product.ProductProfile.(ProductType = CEL and initialTransactionType = POS)
For Product. CalculationType = STND and REVOLVING is set to 0 as default and disabled.

Localization code: ProductVariantTO_advancePaymentsCount

## 🔗 Connections (2)

- → Dependency: [[{DEL}Number of advanced payments]]
- → Dependency: [[Mandatory (Action 1789793)]]
