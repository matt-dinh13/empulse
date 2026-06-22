---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID"
domain: "Analysis Model"
element_id: 1538365
diagrams: 1
connections: 9
tags:
  - requirement
  - analysis-model
---

# 📋 Address validation rule - ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID

## 📝 Notes

- district  - must be value of District.Code


	
- subDistrict - must be value of Subdistrict.Code
	
- block - Length 2
	
- blockSet - Length 2
	
- landmark - Length <= 100, Extended text character set
	
- streetName - Length <= 100, Extended text character set
	
- town - must be value of Town.Code
	
- zipCode.value -Length 5, Numbers only
	
- zipCode - if filled-in, the value in attribute townCode must be valid according to aggregation between enumerations Zip-code and Town or the value in attribute subDistrictCode must be valid according to aggregation between enumerations Zip-code and Subdistrict.
	
- town.code - if filled-in, the value in attribute subDistrictCode must be valid according to aggregation between enumerations Town and Sub-district
	
- subDistrict.code - if filled-in, the value in attribute districtCode must be valid according to aggregation between enumerations Sub-district and District


each record is validated according to Address fields validation rules - ID

## 🔗 Connections (9)

- → Dependency: [[Extended text character set]]
- ← Dependency: [[EmploymentType validation rule - ID]]
- → Dependency: [[Length 50]]
- → Dependency: [[{MOD}Length 3]]
- → Dependency: [[No special characters]]
- → Dependency: [[Length 5]]
- → Dependency: [[Numbers only]]
- → Dependency: [[Length _= 100]]
- ← Dependency: [[{MOD}Application validation rule-ID]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules - ID
