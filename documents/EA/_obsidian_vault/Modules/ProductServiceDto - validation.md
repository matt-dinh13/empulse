---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules"
domain: "Modules"
element_id: 1845093
diagrams: 1
connections: 5
tags:
  - requirement
  - modules
---

# 📋 ProductServiceDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Validation Rules

## 📝 Notes

ProductServiceDto
 

	
- serviceCode
must exists in Service 
[SERVICE_NOT_FOUND]
must fulfill Maximal number of services of the same type
must fulfill Service Exclusivity Check 
must fulfill Check compatibility of service attributes with product


	
- sortOrder
must be unique amongst assigned services of the same service type
mandatory
possible value 1 - 999
[INVALID_NUMBER]


ProductServiceTypeDto
 

	
- serviceTypeCode
Must be unique on product
Must fulfill {MOD}Check compatibility of service type to product properties
[SERVICE_TYPE_NOT_FOUND]
	
- adjustmentRule
Must exists in Service Type Adjustment Rule 
Must be MANDATORY when ServiceType.ServiceFlagType.MANDATORY_WITH_PRODUCT = true


productServiceDto, productServiceTypeDto cross validation
for each service assignment on product must exist serviceType assignment on product with type of assigned service

## 🔗 Connections (5)

- → Dependency: [[Service Exclusivity Check]]
- → Dependency: [[Check compatibility of service attributes with product]]
- → Dependency: [[{MOD}Check compatibility of service type to product properties]]
- → Dependency: [[Maximal number of services of the same type]]
- ← Dependency: [[Product - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
