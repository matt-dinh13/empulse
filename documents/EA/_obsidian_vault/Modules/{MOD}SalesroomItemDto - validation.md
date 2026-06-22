---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom/Validation Rules"
domain: "Modules"
element_id: 1738540
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {MOD}SalesroomItemDto - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom/Validation Rules

## 📝 Notes

- {ADD PCG-3921}codes
If GlobalParameter.BL_USE_SALES_PACKAGE = false then code must exist in active salesroom list obtained by Get salesroom from HomeSIS and the status = ACTIV[INVALID_SALESROOM]{/ADD}


SalesroomItemDto 

	
- itemCode
If GlobalParameter.BL_USE_SALES_PACKAGE = false then itemCode must exists in Product.Code [PRODUCT_NOT_FOUND]
product is not assigned on salesroom Salesroom Product [PRODUCT_ALREADY_ASSIGNED]
If GlobalParameter.BL_USE_SALES_PACKAGE = true then itemCode must exists in SalesPackage.Code [SALES_PACKAGE_NOT_FOUND]
sales package is already assigned on salesroom Salesroom To Sales Package [SALES_PACKAGE_ALREADY_ASSIGNED]
Combination of (Salesroom, Sales package) must be unique in request [SALES_PACKAGE_DUPLICATED]
	
- validFrom
mandatory [REQUIRED]
must be today or in future [INVALID_DATE]


	
- validTo
must be higher or equal to validFrom [INVALID_VALIDITY_DATES]

## 🔗 Connections (4)

- → Dependency: [[Get salesroom from HomeSIS]]
- ← Dependency: [[POST salesrooms products]]
- ← Dependency: [[POST salesrooms sales packages]]
- ← Dependency: [[DELETE salesrooms products]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
