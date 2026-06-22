---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Logical Data Model"
domain: "Modules"
element_id: 1744496
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Commodity Validation Rule Criteria

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Logical Data Model

## 📝 Notes

Criteria used for selection of commodity validation rule. The validation rule is processed only if all the criteria are satisfied.
Type of criteria is not unique in scope of superior Commodity Validation Rule, i.e. more criteria of the same type can be assigned (e.g. more commodity types can be validated by the rule).

## 🔗 Connections (3)

- → Dependency: [[{MOD}Commodity Validation Criteria Type]]
- → Aggregation: [[Commodity Validation Rule]]
- → Dependency: [[{MOD}Commodity Validation Event Type]]

## 📊 Appears In (1 diagrams)

- Logical: Commodity Validation Rules

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | {MOD}Commodity Validation Criteria Type |  |
| Value | string |  |
| Archived | boolean | false |
