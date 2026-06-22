---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/Validation Rules"
domain: "Modules"
element_id: 1860366
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {DEL}Evaluate product search criteria

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/Validation Rules

## 📝 Notes

Product code:

	
- User must enter whole match code. System compares lower cased strings. (PRODUCT.Code)

Product name:

	
- System compares lower cased strings (substring). (PRODUCT.Name)

Valid on:

	
- If this date is specified then search finds products where Product.ValidFrom <= entered.ValidOn and (Product.ValidTo >= entered.ValidOn or Product.ValidTo is empty)

Version activated from:

	
- If this date is specified then search finds products where Product.VersionActivationDate >= entered.VersionActivatedFrom

Version activated to:

	
- If this date is specified then search finds products where Product.VersionActivationDate <= entered.VersionActivatedTo

Product Type, Initial transaction type, Product Profile, Version Status:

	
- If this value is specified then search finds products where Product.value = entered.value


For search by substring is used the rule Search by substring in versioned entities in Product Catalog.

## 🔗 Connections (2)

- → Dependency: [[Search by substring in versioned entities in Product Catalog]]
- ← Dependency: [[{DEL}02.090 Search for products]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Manage Product
