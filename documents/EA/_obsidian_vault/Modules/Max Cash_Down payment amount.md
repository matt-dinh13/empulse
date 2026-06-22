---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803466
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Max Cash/Down payment amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: ClosedEndLoanProduct.ClosedEndLoanProductVariant.MaxCashPaymentAmount
Visible if (InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI) and CashPaymentCalculationMethod = 'F'

Localization code: PRD_MaxCashPaymentAmount

## 🔗 Connections (2)

- → Dependency: [[Cash payment cross validations]]
- → Dependency: [[Financial amount _ 0]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
