---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages/Validation rules"
domain: "Modules"
element_id: 1583210
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SalesPackageItem - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Packages/Validation rules

## 📝 Notes

POST SalesPackageItemInputDto 
 

	
- type
must exists in Sales Package Item Type


	
- code
must exists


	
- If type = PRODUCT then 
- must exist Product in Product where VersionStatus = ACTIVE
[PRODUCT_NOT_FOUND]
- if previous condition is satisfied then must exist intersection of intervals SalesPackageItem.(validFrom, validTo) and Product.(ValidFrom, ValidTo)
[INVALID_VALIDITY_OVERLAPPING]


	
- If type = SERVICE then 
- must exist Service in Service where VersionStatus = ACTIVE
[SERVICE_NOT_FOUND
- if previous condition is satisfied then must exist intersection of intervals SalesPackageItem.(validFrom, validTo) and Service.(ValidFrom, ValidTo)
[INVALID_VALIDITY_OVERLAPPING]



	
- validFrom
Must start at least from today [INVALID_DATE]
	
- validTo
Valid from must be higher or equal than valid to [INVALID_VALIDITY_DATES]


DELETE SalesPackageItemIdDto 

	
- type
must exists in Sales Package Item Type


	
- code
must exists

## 🔗 Connections (1)

- ← Dependency: [[POST sales package items]]

## 📊 Appears In (2 diagrams)

- Custom: Validation rules
- Use Case: Use Case
