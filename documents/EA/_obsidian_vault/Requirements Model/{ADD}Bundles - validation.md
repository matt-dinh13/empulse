---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/PCG-4918 CBL-26764 BREIT-67 - Service Bundles"
domain: "Requirements Model"
element_id: 1843625
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Bundles - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/PCG-4918 CBL-26764 BREIT-67 - Service Bundles

## 📝 Notes

{ADD PCG-4926/}

Once the FinalStatus=true then only validTo and relations can be updated

BundleInputDto 

	
- name
must fulfill Product catalog entity name 
mandatory for POST
	
- description
max length 255


	
- validFrom
must be >= actual date
mandatory
	
- validTo
must be >= validFrom
must be >= actual date


	
- final


BundleServiceDto 

	
- serviceCode
mandatory
must exists in SCService.Code where SCService.Final = true and (SCService.ValidTo > today or null)
	
- tariffCode
must exists in Tariff.Code where Tariff.VersionStatus = Active and and (Tariff.ValidTo > today or null) and Tariff.ServiceRestriction = SCService.SCServiceType.Code of serviceCode


ServicePreferencesDto, ServiceTypePreferencesDto 

	
- preference
must exists in PreferenceType
	
- serviceCode and preference
needs to be both filled together
	
- serviceTypeCode and preference
needs to be both filled together

## 🔗 Connections (3)

- → Dependency: [[Product catalog entity name]]
- ← Dependency: [[{ADD}PUT bundle]]
- ← Dependency: [[{ADD}POST bundle]]

## 📊 Appears In (3 diagrams)

- Custom: PCG-4918 CBL-26764 BREIT-67 - Service Bundles
- Custom: Validation Rules
- Use Case: Use Case
