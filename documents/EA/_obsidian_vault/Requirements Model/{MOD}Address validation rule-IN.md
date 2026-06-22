---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10347 Increase length of address fields in BSL/LOR-10356 Increase length of address fields in BSL"
domain: "Requirements Model"
element_id: 1819513
diagrams: 2
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Address validation rule-IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10347 Increase length of address fields in BSL/LOR-10356 Increase length of address fields in BSL

## 📝 Notes

- region - must be value of Region.Code


	
- district - must be value of District.Code
	
- floor - Numbers only, Length10
	
- houseNumber - {DEL LOR-10356}Length50{/DEL}, {ADD LOR-10356}Length70{/ADD}, Cross validation
	
- landmark - {DEL LOR-10356}Length60{/DEL},  {ADD LOR-10356}Length70{/ADD}
	
- locality - {DEL LOR-10356}Length40{DEL}, {ADD LOR-10356}Length70{/ADD}, Cross validation
	
- streetName - {DEL LOR-10356}Length50{/DEL}, {ADD LOR-10356}Length70{/ADD}, Cross validation
	
- town- {DEL LOR-10356}Length40{/DEL}, {ADD LOR-10356}Length70{/ADD}
	
- zipCode.code - must be value of ZIP code.Code, the value in attribute districtCode must be valid according to aggregation between enumerations Zip-code and District.
	
- district.code - if filled-in, the value in attribute regionCode must be valid according to aggregation between enumerations District and Region
	
- region.code - if filled-in, the value in attribute countryCode must be valid according to aggregation between enumerations Region and Country

## 🔗 Connections (9)

- → Dependency: [[Cross validation (Requirement 1819338)]]
- → Dependency: [[Length60 (Requirement 1819340)]]
- → Dependency: [[Numbers only]]
- → Dependency: [[Length40 (Requirement 1819341)]]
- → Dependency: [[Length10]]
- ← Dependency: [[Employment validation rule-IN]]
- → Dependency: [[Length 50]]
- → Dependency: [[{ADD}Length70]]
- ← Dependency: [[{MOD}Application validation rule - IN]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-10356 Increase length of address fields in BSL
- Custom: Validation rules - IN
