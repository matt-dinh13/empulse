---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/PCG-4918 CBL-26764 BREIT-67 - Service Bundles"
domain: "Requirements Model"
element_id: 1867130
diagrams: 4
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 Tariff - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/PCG-4918 CBL-26764 BREIT-67 - Service Bundles

## 📝 Notes

- codeVersionNumber
must exists in Tariff where Tatiff.Code = code and Tariff.VersionNumber = versionNumber


TariffInputDto 

	
- code - for creating new tariff
must be unique in Tariff 
must fulfill Tariff code  
	
- name
must fulfill Tariff name
	
- plannedActivationDate
mandatory when versionStatus = FOR_ACTIVATION and must be > actual date , otherwise ignored
[INVALID_PLANNED_ACTIVATION_DATE]
	
- approvalDocument
mandatory
Number of characters must be in interval <3, 60>
[INVALID_LEGTH]
	
- currency
must exists in Currency
Flip only: if active version of tariff exist then currency must be the same as on active version
[INVALID_CURRENCY]
	
- tariffItem
must fulfill TariffItemDto - validation
	
- purpose
must exist in Tariff Purpose
For project: FLIP - Code must be available in list of Enum active values.tariffPurpose
	
- serviceRestriction
must exists in Service Type or ServiceCatalog Service Type


	
- textToDisplay.key
must exists in System Language.code
mandatory when textToDisplay.value is filled
	
- textToDisplay.value
max length 1000
mandatory when textToDisplay.key is filled


PUT ActivationInputDto 

	
- must fulfill rule Product catalog entity activation

## 🔗 Connections (9)

- ← Dependency: [[{MOD}PUT tariffs]]
- ← Dependency: [[{MOD}PUT tariff activations]]
- ← Dependency: [[{MOD}POST tariffs]]
- → Dependency: [[Product catalog entity activation]]
- → Dependency: [[Tariff code]]
- → Dependency: [[{ADD}Enum active values]]
- → Dependency: [[Tariff name]]
- → Dependency: [[{MOD}TariffItemDto - validation]]
- ← Dependency: [[{ADD}02.160 Import product catalog setting UI]]

## 📊 Appears In (4 diagrams)

- Custom: BREIT-62 – AM/AP/PCG Product configuration for Flip
- Custom: Validation Rules
- Use Case: Export/Import product setting
- Use Case: Use Case
