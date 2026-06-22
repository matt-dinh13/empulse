---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803493
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Terms

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: ClosedEndLoanProduct.ClosedEndLoanProductVariant.Terms(x)
Vector of values, ordered asc
When saving 
- new values must be added, 
- removed values must be deleted.

If Product.ProductProfile.ProductType = CEL and Product.ProductProfile.InitialTransactionType = CASH and Product.ProductFlag.ProductFlagType.Code = ACCEPT_VAR_PARAM_FROM_INPUT then Optional
else Mandatory

Localization code: PRD_TermsNumber

## 🔗 Connections (2)

- → Dependency: [[Terms (Requirement 1489254)]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
