---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822818
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Mask fields rule for AUI

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

This rule describes how fields defined in global parameter AUIMaskedFields are masked in application form, client search screen and client detail search screen.

Each country has own specific rule:
- Mask Fields rule for AUI - VN

Behavior of editable field: 

	
- when user fills in the phone number, value is displayed without any limitation
	
- when user clicks out of the field, value is masked
	
- when user clicks back to the field, the value is deleted and user has to enter it again
	
- when value is prefilled (e.g. from 1BoD or CIF), value is immediately masked

Uneditabled fields  are just masked without any special behavior.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}01.160 Search client]]
- ← Dependency: [[Application form construction]]
- ← Generalization: [[Mask fields rule for AUI - VN]]

## 📊 Appears In (2 diagrams)

- Custom: Product business rules
- Use Case: Client search
