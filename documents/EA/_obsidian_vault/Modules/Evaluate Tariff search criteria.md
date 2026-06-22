---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules"
domain: "Modules"
element_id: 1304644
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Evaluate Tariff search criteria

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/User Interface for Tariff Management/Tariff Root/Business Rules

## 📝 Notes

Tariff code:

	
- System searches for tariff where Tariff.Code = entered string (lower cased strings are compared).

Name:

	
- System compares lower cased strings (substring). (Tariff.Name)

Active:

	
- If checked then search finds tariffs where Tariff.Active = True else search ignores value of Tariff.Active (all tariffs are displayed)

Version activated from:

	
- If this date is specified then search finds Tariffs where Tariff.VersionActivationDate >= entered.VersionActivatedFrom

Version activated to:

	
- If this date is specified then search finds Tariffs where Tariff.VersionActivationDate <= entered.VersionActivatedTo

Tariff Type, Version Status:

	
- If this value is specified then search finds services where Tariff.value = entered.value


For search by substring is used the rule Search by substring in versioned entities in Product Catalog.

## 🔗 Connections (2)

- → Dependency: [[Search by substring in versioned entities in Product Catalog]]
- ← Dependency: [[{DEL}04.090 Search for Tariffs]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Search for tariffs
- Use Case: Tariffs
