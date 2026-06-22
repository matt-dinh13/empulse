---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case"
domain: "Modules"
element_id: 1858719
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetCommodityValidationDataRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case

## 📝 Notes

// Validation of Request for method GetCommodityValidationData of CommodityWS
// returned resultCode code is in bracket

ComplexType = GetCommodityValidationData

	
- Minimum of one element from ComplexType should be present (serialNumber does not count) [AT_LEAST_ONE_INPUT]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}01.698 Provide commodity validation data for external systems]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Manage commodity data from external systems
