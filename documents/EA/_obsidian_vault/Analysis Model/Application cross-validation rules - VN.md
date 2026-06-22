---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN"
domain: "Analysis Model"
element_id: 1773129
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Application cross-validation rules - VN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/VN

## 📝 Notes

- commodity - if global parameter validateCommodityImeiDuplicity = TRUE, each applicable record (determined based on the rule Select application commodities for IMEI validation) is validated according to the rule Validate IMEI internally

## 🔗 Connections (3)

- → Dependency: [[Validate IMEI internally]]
- → Dependency: [[Select application commodities for IMEI validation]]
- ← Dependency: [[Application validation rule (Requirement 1773433)]]

## 📊 Appears In (2 diagrams)

- Custom: Cross validations-VN
- Custom: Validation Rules
