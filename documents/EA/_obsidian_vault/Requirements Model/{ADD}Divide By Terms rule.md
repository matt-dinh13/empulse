---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5511/PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back"
domain: "Requirements Model"
element_id: 1867127
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Divide By Terms rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5511/PCG-5517 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back

## 📝 Notes

{ADD PCG-5511/}
For country: PH

DivideByTerms can be true only for specific tariff items:
- TariffItemType.ChargingPeriodicity = NOT_CHARGED
- TariffItemType.CategoryType = O
- TariffItem.Percentage = INTA

## 🔗 Connections (3)

- ← Dependency: [[{ADD}Divide by terms]]
- ← Dependency: [[{ADD}Divide by terms (GUIElement 1867007)]]
- ← Dependency: [[{MOD}TariffItemDto - validation]]

## 📊 Appears In (2 diagrams)

- Custom: PCG-5511 CBL-29642 BRPH-2099 - Create New Service Type: Interest Back
- Custom: Validation Rules
