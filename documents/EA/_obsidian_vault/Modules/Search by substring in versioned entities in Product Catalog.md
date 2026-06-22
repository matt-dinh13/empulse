---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules"
domain: "Modules"
element_id: 1844978
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Search by substring in versioned entities in Product Catalog

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules

## 📝 Notes

There are specific (more friendly) rules for searching by text string in main entities of Product Catalog:

	
- You can use % to help with string search, with no limitations related to the character count. Character % is acting exactly like in sql syntax.
	
- Other option to look up substrings is to only write that substring without any special characters.

## 🔗 Connections (4)

- ← Dependency: [[Evaluate Tariff search criteria]]
- ← Dependency: [[Evaluate Insurance program search criteria]]
- ← Dependency: [[Evaluate Service search criteria]]
- ← Dependency: [[{DEL}Evaluate product search criteria]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Business Rules
