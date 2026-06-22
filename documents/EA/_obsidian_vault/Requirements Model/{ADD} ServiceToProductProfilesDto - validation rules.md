---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5343 Display vas add on offers based on specific product type (CBL-29025)"
domain: "Requirements Model"
element_id: 1864965
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD} ServiceToProductProfilesDto - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/ID/PCG-5343 Display vas add on offers based on specific product type (CBL-29025)

## 📝 Notes

{ADD PCG-5343/}
For country: ID

POST ServiceToProductProfilesDto

	
- serviceCode
Mandatory [REQUIRED])
must exist in Service as Service.Code
	
- productProfileCode
Mandatory [REQUIRED]
must exist in Product Profile as ProductProfile.Code

Combination of (serviceCode, productProfileCode) must be unique in Service to Product Profile Relation 

DELETE ServiceToProductProfilesDto 

	
- serviceCode
Mandatory [REQUIRED]
	
- productProfileCode
Mandatory [REQUIRED]

Combination of (serviceCode, productProfileCode) must exists in Service to Product Profile Relation

## 🔗 Connections (3)

- ← Dependency: [[{ADD} DELETE service-to-product-profiles]]
- ← Dependency: [[{ADD} POST service-to-product-profiles]]
- → Dependency: [[{ADD} ServiceToProductProfilesDto]]

## 📊 Appears In (3 diagrams)

- Custom: PCG-5343 Display vas add on offers based on specific product type (CBL-29025)
- Custom: Validation Rules
- Use Case: Use Case
