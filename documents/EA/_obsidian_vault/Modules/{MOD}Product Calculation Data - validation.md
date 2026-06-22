---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Calculation Data/Validation Rules"
domain: "Modules"
element_id: 1660288
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Product Calculation Data - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Calculation Data/Validation Rules

## 📝 Notes

ProductCalculationDataInputDto - POST
 

	
- accstmtServiceCode
service must have serviceType = ACCSTMT [VAL_WRONG_SERVICE_TYPE]
filled only with mtcaccServiceCode [INVALID_VALUE]
{DEL PCG-3423}required when mtcaccServiceCode if filled [REQUIRED]{/DEL}
	
- accstmtServiceVersion
filled only with accstmtServiceCode [INVALID_VALUE]
required when accstmtServiceCode if filled [REQUIRED]
	
- mtcaccServiceCode
service must have serviceType = MTCACC [VAL_WRONG_SERVICE_TYPE]
	
- mtcaccServiceVersion
filled only with mtcaccServiceCode [INVALID_VALUE]
mandatory when mtcaccServiceCode if filled [REQUIRED]
	
- productCode
mandatory [REQUIRED]
product with productCode and productVersion must exist in Product [PRODUCT_NOT_FOUND]
	
- productVersion
mandatory [REQUIRED]
	
- productVariantCode
mandatory if GlobalParameter.useFinancingSchemeRELVariants (PCG_USE_RELFS_PRODUCT_VARIANTS) = true [PRODUCT_VARIANT_REQUIRED]
must exist for specified productCode and productVersion in Product Variant [PRODUCT_VARIANT_NOT_FOUND]
	
- financingPackageCode
	
- finaningPackageVersion
filled only with financingPackageCode [INVALID_VALUE]
mandatory when financingPackageCode is filled [REQUIRED]
	
- financingSchemeCode
filled only with financingPackageCode [INVALID_VALUE]
mandatory when financingPackageCode is filled [REQUIRED]
	
- financingSchemeVersion
filled only with financingPackageCode [INVALID_VALUE]
mandatory when financingPackageCode is filled [REQUIRED]
	
- financinvSchemeVariantCode
filled only with financingPackageCode [INVALID_VALUE]
mandatory when financingPackageCode is filled [REQUIRED]

## 🔗 Connections (1)

- ← Dependency: [[POST product-calculation-data]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
