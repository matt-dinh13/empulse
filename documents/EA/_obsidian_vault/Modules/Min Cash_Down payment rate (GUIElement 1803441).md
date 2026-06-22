---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803441
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Min Cash/Down payment rate

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: ClosedEndLoanProduct.ClosedEndLoanProductVariant.MinCashPaymentRate
Visible and mandatory if (InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI) and CashPaymentCalculationMethod = 'P'

Localization code: PRD_MinCashPaymentRate

## 🔗 Connections (2)

- → Dependency: [[Cash payment cross validations]]
- → Dependency: [[Percentage (0-100)]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
