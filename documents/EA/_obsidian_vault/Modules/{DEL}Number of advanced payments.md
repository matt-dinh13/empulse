---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/Validation Rules"
domain: "Modules"
element_id: 1489253
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}Number of advanced payments

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/Validation Rules

## 📝 Notes

{DEL PCG-1208_1/}
Number of advanced payments validation rules:
Checked only for loans with InitialTransactionType = POS.

	
- Possible values are defined by type Number of advanced payments. (MSG_NumberOfAdvancedPayments)


	
- If Product.CalculationType = 'CFR_CP' then value -1 is not allowed (MSG_NumOfAdvPaymMinus1Disabled)

## 🔗 Connections (1)

- ← Dependency: [[Number of advance payments (GUIElement 1803467)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
