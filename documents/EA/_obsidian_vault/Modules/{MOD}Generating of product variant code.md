---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/Validation Rules"
domain: "Modules"
element_id: 1539977
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Generating of product variant code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Variant/Validation Rules

## 📝 Notes

Variant code is generated as concatenation of Product code and string '-' and variant number. 
Variant number is defined as the highest value of {ADD PCG-2196}digits after last '-' {/ADD}{DEL PCG-2196}last two digits{/DEL} of product variant codes defined in scope of parent product version plus 1, for the first variant it is 01, for the second it is 02, etc.
Must be unique.
Example: MyProduct-05

## 🔗 Connections (2)

- ← Dependency: [[ProductVariantDto - validation]]
- ← Dependency: [[{DEL}02.602 Set product variant]]

## 📊 Appears In (3 diagrams)

- Custom: Validation Rules
- Custom: Validation Rules
- Use Case: Manage Product Variant
