---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/Validation Rules"
domain: "Modules"
element_id: 1489255
diagrams: 2
connections: 8
tags:
  - requirement
  - modules
---

# 📋 Cash payment cross validations

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/Validation Rules

## 📝 Notes

Validations:
Checked only for loans with InitialTransactionType = POS when particular values are defined:

	
- Cash payment calculation method is mandatory


	
- If cash payment calculation method is set to fixed then value min cash payment amount is mandatory (MSG_CashPaymentAmountMandatoryForFixed).


	
- If cash payment calculation method is set to percentage then value min cash payment rate is mandatory (MSG_CashPaymentRateMandatoryForPercentage).


	
- 0 <=  min cash payment amount {DEL PCG-2197}<= minimal credit amount{/DEL} (MSG_MinCashPaymentAmount)


	
- 0 <=  max cash payment amount <= maximal credit amount (MSG_MaxCashPaymentAmount)
	
- min cash payment amount <=  max cash payment amount (MSG_CompCashPaymentAmount)
	
- min cash payment rate <=  max cash payment rate (MSG_CompCashPaymenRate)

## 🔗 Connections (8)

- ← Dependency: [[Max Cash_Down payment rate (GUIElement 1803486)]]
- ← Dependency: [[Credit amount minimal (GUIElement 1803472)]]
- ← Dependency: [[Max Cash_Down payment amount]]
- ← Dependency: [[Cash_Down payment calculation method]]
- ← Dependency: [[Credit amount maximal (GUIElement 1803461)]]
- ← Dependency: [[Min Cash_Down payment rate (GUIElement 1803441)]]
- ← Dependency: [[Min Cash_Down payment amount]]
- ← Dependency: [[ProductVariantDto - validation]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation Rules
