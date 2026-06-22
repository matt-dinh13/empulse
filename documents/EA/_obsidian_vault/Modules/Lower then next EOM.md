---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Validation rules"
domain: "Modules"
element_id: 1623476
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Lower then next EOM

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Validation rules

## 📝 Notes

This validation is performed only for REL contracts.

Value must be lower then next EOM (end of month). If validation fails, error message "Supposed payment date has to be equal or less than DD/MM/YYYY!"( MSG_COMPARE_LESS_THAN_EQUAL) is displayed.

Example:
today=5.10.2015
billing day (Contract -> Financial Parameters.Billing Day)=15
EOM=15.10.1015
next EOM=15.11.2015

Value must be lower then 15.11.2015.

## 🔗 Connections (1)

- ← Dependency: [[Supposed payment date validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules
