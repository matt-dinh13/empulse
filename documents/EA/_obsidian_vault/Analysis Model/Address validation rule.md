---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Validation rules"
domain: "Analysis Model"
element_id: 1773435
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Address validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Offer Management/Validation rules

## 📝 Notes

- countryCode – must be value of Country.Code


	
- regionCode - Must be empty, if regionName is not empty
	
- regionName -  Must be empty, if regionCode is not empty
	
- districtCode - Must be empty, if districtName is not empty
	
- districtName -  Must be empty, if districtCode is not empty
	
- subDistrictName - Must be empty, if subdistrictCode is not empty
	
- subDistrictCode  - Must be empty, if subdistrictName is not empty
	
- block
	
- blockSet
	
- flat
	
- floor
	
- houseNumber
	
- landmark
	
- localityCode  - Must be empty, if localityName is not empty
	
- localityName  -  Must be empty, if localityCode is not empty
	
- streetName
	
- townCode -  Must be empty, if townName is not empty
	
- townName  - Must be empty, if townCode is not empty
	
- zipCode - Must be empty, if zipName is not empty
	
- zipName  -  Must be empty, if zipCode is not empty
	
- timeAtAddress - Cannot be in future

## 🔗 Connections (3)

- ← Dependency: [[ClientAddress validation rule]]
- ← Dependency: [[Employment validation rule]]
- ← Dependency: [[PersonAddress validation rule]]

## 📊 Appears In (2 diagrams)

- Custom: Validation rules
- Custom: Validation Rules
