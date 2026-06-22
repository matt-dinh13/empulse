---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/Use Case"
domain: "Modules"
element_id: 1860360
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}Evaluate Product Profile search criteria

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/Use Case

## 📝 Notes

Product Profile code:

	
- User must enter whole match code. System compares lower cased strings. (ProductProfile.Code)

Product Profile name:

	
- System compares lower cased strings (substring). (ProductProfile.Name)

Product Type, Initial transaction type,:

	
- If any mentioned value is entered then search finds product profiles where ProductProfile.value = entered.value

Show inactive profiles:

	
- If ticked then also inactive profiles are displayed; otherwise only active profiles are displayed.


For searching by substring use rule Search by substring in versioned entities in Product Catalog.

## 🔗 Connections (1)

- ← Dependency: [[{DEL}02.011 Search for Product Profiles]]

## 📊 Appears In (1 diagrams)

- Use Case: Manage Product Profile
