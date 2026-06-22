---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/PH"
domain: "Analysis Model"
element_id: 1738016
diagrams: 1
connections: 9
tags:
  - requirement
  - analysis-model
---

# 📋 Address validation rule - PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/PH

## 📝 Notes

- districtCode- must be value of District - PH
	
- subDistrictCode- must be value of Sub-district - PH; if filled-in, the value in attribute districtCode must be valid according to aggregation between enumerations Sub-district and District
	
- subDistrictName - Allowed characters, Double space forbidden, Length 50
	
- landmark - Allowed characters, Double space forbidden, Length 255
	
- streetName- Allowed characters (extended set), Double space forbidden, Length 90
	
- townCode -  must be value of Town - PH; if filled-in, the value in attribute subDistrictCode must be valid according to aggregation between enumerations Town and Sub-district
	
- townName-  Allowed characters, Double space forbidden, Length 50
	
- zipCode - must be value of Zip Code - PH; if filled-in, the value in attribute districtCode must be valid according to aggregation between enumerations Zip-code and District
	
- zipName - Zip code format

## 🔗 Connections (9)

- ← Dependency: [[Zip code format]]
- ← Dependency: [[Employment validation rule-PH]]
- → Dependency: [[Length 255]]
- → Dependency: [[Allowed characters (extended set)]]
- → Dependency: [[Length 90]]
- → Dependency: [[Double space forbidden]]
- → Dependency: [[Length 50]]
- ← Dependency: [[ClientAddress validation rule - PH]]
- → Dependency: [[Allowed characters (Requirement 1501276)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - PH
