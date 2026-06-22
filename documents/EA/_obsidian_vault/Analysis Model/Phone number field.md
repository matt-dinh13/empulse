---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/VN"
domain: "Analysis Model"
element_id: 1860594
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Phone number field

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/VN

## 📝 Notes

Mask phone number:

	
- display last 4 digits
	
- preceding digits replaced by 'x'.


Behavior of editable field: 

	
- when user fills in the phone number, value is displayed without any limitation
	
- when user clicks out of the field, value is masked
	
- when user clicks back to the field, the value is deleted and user has to enter it again
	
- when value is prefilled (e.g. from 1BoD or CIF), value is immediately masked

Disable fields are just masked without any special behavior.

This behavior has switch maskPhoneNumbersInAF

## 🔗 Connections (3)

- ← Dependency: [[Phone number (GUIElement 1533626)]]
- ← Dependency: [[Mobile phone2 (GUIElement 1533646)]]
- ← Dependency: [[Mobile phone1 (GUIElement 1533645)]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules VN
