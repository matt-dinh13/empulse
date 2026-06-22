---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1019480
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 RELIP Service - allowed combination rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

// Limited offer in list boxes for RELIP service

If any of values
- InstallmentPlanMethod
- DueDayMethod
- InstallmentRoundingMethod
- Installment Rounding Scale
is being entered then the list of offered values in corresponding listbox is limited by definition in RELIP Service Allowed Combination and other already entered key values defined in this entity.

Example of entering of DueDayMethod in listbox:
a) If values InstallmentPlanMethod, InstallmentRoundingMethod and InstallmentRoundingScale are not entered, then list box contains distinct values of InstallmentPlanMethod from all records in RELIPServiceAllowedCombination.
b) If the value InstallmentPlanMethod is already entered, then the list box contains distinct values of InstallmentPlanMethod from only such records in RELIPServiceAllowedCombination where RELIPServiceAllowedCombination.InstallmentPlanMethod = entered InstallmentPlanMethod.

## 🔗 Connections (2)

- ← Dependency: [[RELIP Service - validation rules]]
- ← Dependency: [[Set RELIP service]]

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP service 
