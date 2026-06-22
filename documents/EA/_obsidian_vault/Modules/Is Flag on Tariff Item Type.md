---
type: Requirement
stereotype: "Display"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules"
domain: "Modules"
element_id: 1879059
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Is Flag on Tariff Item Type

> **Type**: Requirement · **Stereotype**: «Display»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Tariff/Tariff Calculation/Business Rules

## 📝 Notes

Input: 
- inputTariffItemType
- inputFlagType

If exists TariffItemType.TariffItemTypeFlag where 

	
- TariffItemType = inputTariffItemType
	
- FlagType = inputFlagType

then return TRUE else return FALSE.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Check fee request and find corresponding tariff item]]
- ← Dependency: [[Algorithm_ Find tariff by Current Tariff Use flag]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Debt calculator
- Use Case: Fee services used by external system (Collection)
