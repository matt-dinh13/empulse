---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Validation rules"
domain: "Modules"
element_id: 1623478
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Date has to be in past

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Validation rules

## 📝 Notes

When user wants to display historical version of Debt catalogue, fills in date and asks system to display historical debt catalogue, then this date has to be from the past. Maximal allowed value is the current day.

If validation fails, then message MSG_CANT_USE_FUTURE_DATE_DC is displayed.

## 🔗 Connections (1)

- ← Dependency: [[Debt catalogue must be from past]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
