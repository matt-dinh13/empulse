---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/PCG-4918 CBL-26764 BREIT-67 - Service Bundles"
domain: "Requirements Model"
element_id: 1851658
diagrams: 3
connections: 13
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Service Catalog Service - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/HoselNG / FLIP/PCG-4918 CBL-26764 BREIT-67 - Service Bundles

## 📝 Notes

Once the FinalStatus=true then only validTo and relations can be updated

Service

	
- name
need to fulfill Product catalog entity name  
	
- serviceType
must exists in Service Type.Code where ServiceType.Active = true


	
- description
max length 255


	
- tariff
must exists in Tariff.Code where Tariff.VersionStatus = Active.
Tariff.ServiceRestriction must be equal to SCService.SCServiceType.Code
	
- serviceLevel
specific for each service type:
must exists in Service Level for specific Service type


	
- validFrom
must be >= actual date
	
- validTo
must be >= validFrom
must be >= actual date


Service criterion

	
- type
must exist in Financing Package Criterion Type
{ADD PCG-5016}For project: FLIP - Code must be available in list of Enum active values.serviceCriterionType{/ADD}
mandatory


	
- value
maximal length 50
mandatory

Value must fulfill following rules for specific type:

	
- PURPOSE
value must exist in Financing Package Purpose


	
- MERCHANT
must exist in list of Merchants returned by the rule Get List of Merchants.
	
- CODE
service criterion code (type and value) need to exists in service
only for update, delete
	
- COMMODITY_TYPE
must exists in list of commodity types returned by the rule Get list of commodity types
	
- COMMODITY_MANUFACTURER
must exists in Manufacturer
	
- COMMODITY_MODEL
	
- COMMODITY_MODEL_CODE
must exists in Model.Code


Service relation

	
- relation type
must exists in Relation Type
	
- target service
muse exists in Service.Code where Service.Final = True


Service role

	
- roleCode
must exists in list of roles defined on ServiceType
	
- minRoleAssignment
must be in interval <Min assignment, Max assignment.> for specific roleCode defined on Service type role assignment of ServiceType 
must be equal or lower then maxRoleAssignment
	
- maxRoleAssignment
must be in interval <Min assignment, Max assignment.> for specific roleCode defined on Service type role assignment of ServiceType 
must be equal or higher then minRoleAssignment


Service parameter

	
- type
must exists in Service Parameter Type or in service specific parameter type according service type
IPPACK
INSURANCE 
MTCACC 
CARD 
ACCSTMT
{ADD PCG-4880 BREIT-62/}RELFER 
RELPAYHOL {/ADD}
must be configured for Service Type
	
- code
service parameter code (type and value) need to exists in service
only for update, delete


Value must fulfill following rules for specific type:

	
- Duration
attributes must fulfill Duration service parameter validation
	
- IPPACK
attributes must fulfill IPPACK service parameter validation
	
- INSURANCE
attributes must fulfill INSURANCE service parameter validation
	
- MTCACC
attributes must fulfill MTCACC service parameter validation
	
- CARD
attributes must fulfill CARD service parameter validation
	
- ACCSTMT
attributes must fulfill ACCSTMT service parameter validation
	
- {ADD PCG-4880 BREIT-62/}RELFER
attributes must fulfill RELFER service parameter validation
	
- RELPAYHOL
attributes must fulfill RELPAYHOL service parameter validation
{/ADD}

## 🔗 Connections (13)

- ← Dependency: [[POST new service]]
- ← Dependency: [[PUT service]]
- → Dependency: [[{ADD}Enum active values]]
- → Dependency: [[INSURANCE service parameter validation]]
- → Dependency: [[RELPAYHOL service parameter validation]]
- → Dependency: [[MTCACC service parameter validation]]
- → Dependency: [[Product catalog entity name]]
- → Dependency: [[ACCSTMT service parameter validation]]
- → Dependency: [[{MOD}IPPACK service parameter validation]]
- → Dependency: [[Get List of Merchants]]
- → Dependency: [[RELFER service parameter validation]]
- → Dependency: [[CARD service parameter validation]]
- → Dependency: [[Duration service parameter validation]]

## 📊 Appears In (3 diagrams)

- Custom: BREIT-62 – AM/AP/PCG Product configuration for Flip
- Custom: Validation Rules
- Use Case: Use Case
