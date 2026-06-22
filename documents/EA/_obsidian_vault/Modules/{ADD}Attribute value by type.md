---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions/Business Rules"
domain: "Modules"
element_id: 1845848
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Attribute value by type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions/Business Rules

## 📝 Notes

{ADD PCG-4839/}{ADD PCG-5137/}
Rule for checking formatting of value for different attribute types
When SalesDescription.SalesDescriptionAttribute.Value (Value) is filled it needs to fulfill the following rules based on SalesDescription.SalesDescriptionAttribute.Type (Type):
- If Type = NUMBER then Value must contains only numbers (0-9) and decimal point.
- If Type = DATE then Value must be in format YYYY-MM-DD
- If Type = PERCENTAGE then Value must contains only numbers (0-9) and decimal point.

for country: mobi bank  {ADD PCG-5137} also for PH country {PCG-5137/}

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Sales description - validation]]
- ← Dependency: [[Value (GUIElement 1845856)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Set Sales Description on entity
- Custom: Validation Rules
