---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803452
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Annual interest rate

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: ClosedEndLoanProduct.ClosedEndLoanProductVariant.AnnualInterestRate

If Product.ProductProfile.ProductType = CEL and Product.ProductProfile.InitialTransactionType = CASH and Product.ProductFlag.ProductFlagType.Code = ACCEPT_VAR_PARAM_FROM_INPUT then Optional
else Mandatory

Localization code: PRD_AnnualInterestRate

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[{MOD}Percentage]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
