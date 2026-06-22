---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product"
domain: "Analysis Model"
element_id: 1787135
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Allowed combination of Industry and Economical Status

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/Product

## 📝 Notes

Combination of selected Industry and Economical Status must be allowed by the Industry to Economical Status configuration (i.e. active record of Industry_to_Economical_Status[.Industry = selected employerIndustry and .Economical_Status = selected economicalStatus] exists).

In case this validation fails, message MSG_ENUMS_COMBINATION_NOT_ALLOWED is returned.

## 🔗 Connections (1)

- ← Dependency: [[Employment validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Product validation
