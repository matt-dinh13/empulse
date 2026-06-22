---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API"
domain: "Modules"
element_id: 1873262
diagrams: 6
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Product catalog entity activation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/COMMON for Product catalog REST API

## 📝 Notes

ActivationInputDto 

	
- versionStatus
must exists in VersionStatusActivation  [INVALID_VERSION_STATUS]


	
- plannedActivationDate
mandatory when versionStatus = FOR_ACTIVATION, otherwise ignored
must be in future [INVALID_PLANNED_ACTIVATION_DATE]
	
- there is no other version with versionStataus = FOR_ACTIVATION (warning)
	
- there is no other version with versionStatus = FOR_ACTIVATION and the same plannedActivationDate (error)

## 🔗 Connections (5)

- ← Dependency: [[{MOD}Financing Scheme - validation]]
- ← Dependency: [[Product - validation]]
- ← Dependency: [[{MOD}Financing package - validation]]
- ← Dependency: [[Tariff - validation]]
- ← Dependency: [[Service - validation]]

## 📊 Appears In (6 diagrams)

- Custom: COMMON for Product catalog REST API
- Custom: Validation Rules
- Custom: Validation Rules
- Custom: Validation Rules
- Custom: Validation Rules
- Custom: Validation Rules
