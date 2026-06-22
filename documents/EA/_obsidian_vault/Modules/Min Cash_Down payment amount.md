---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803427
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Min Cash/Down payment amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: ClosedEndLoanProduct.ClosedEndLoanProductVariant.MinCashPaymentAmount
Visible and mandatory if (InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI) and CashPaymentCalculationMethod = 'F'

Localization code: PRD_MinCashPaymentAmount

## 🔗 Connections (2)

- → Dependency: [[Financial amount _ 0]]
- → Dependency: [[Cash payment cross validations]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
