---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Validation Rules"
domain: "Modules"
element_id: 1867128
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 TariffItemsSearchParametersDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Validation Rules

## 📝 Notes

- codeVersion
must exists in Tariff where Tatiff.Code = code and Tariff.VersionNumber = versionNumber
[INVALID_TARIFF]


TariffItemsSearchParametersDto 

	
- tariffItemType
must exists in Tariff Item Type
[INVALID_TARIFF_ITEM_TYPE]
	
- usageType
must exists in Tariff Item Usage
[INVALID_USAGE_TYPE]
	
- chargingPeriodicity
must exists in Charging Periodicity Type
[INVALID_CHARGING_PERIODICITY_TYPE]


Cross field validation

	
- chargingPeriodicity, chargedToPrinciple must be empty when usageType is not filled [INVALID_VALUE]
	
- Only one of following can be filled:
- tariffItemType
- usageType
[INVALID_VALUE]

## 🔗 Connections (1)

- ← Dependency: [[GET tariff-items]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
