---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface"
domain: "Modules"
element_id: 1803465
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Cash/Down payment calculation method

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/User Interface

## 📝 Notes

LDM: Product.ProductVariant.CashPaymentCalculationMethod.Name
Listed: CashPaymentCalculationMethodType.Name
Visible only for Product.ProductProfile.InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI
After the Cash payment calculation method is changed the values

	
- min/max cash payment rate
	
- min/max cash payment amount

are removed.

Localization code: ProductVariantTO_calculationMethod

## 🔗 Connections (2)

- → Dependency: [[Cash payment cross validations]]
- → Dependency: [[Product Calculation Method]]

## 📊 Appears In (1 diagrams)

- Custom: Variants-Set
