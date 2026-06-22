---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Business Rules"
domain: "Modules"
element_id: 1804061
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Get set of Business Product Types

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/COMMON for Product/Business Rules

## 📝 Notes

Input:
- ProductTypes - set of combinations (ProductType + InitialTransactionType + IsDebit)
Output:
- Set of Business Product Types

Each item in ProductTypes is transformed to localized business product type name and ordered according to description in enumeration Business Product Type.
Set of Business Product Types is concatenation of returned business product type names, each name is on separate line

## 🔗 Connections (3)

- ← Dependency: [[List of Marketing Product Offers]]
- → Dependency: [[Business Product Type]]
- ← Dependency: [[Marketing Offer Limits]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Marketing Offer Limits
