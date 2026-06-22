---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775633
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}SalesPackageValues - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
// Validation of SalesPackageValues

Input:
- salesPackageCode

SalesPackageValues

	
- name
Mandatory
[MISSING_NAME]


	
- active
Mandatory
[MISSING_ACTIVE]


	
- item
Optional
Each assigned SalesPackageItem is checked by the rule below


SalesPackageItem
description = "Type: " + type + " " + code

	
- type
Mandatory
[MISSING_ITEMTYPE]
Code must exist in Sales Package Item Type 
[INVALID_ITEMTYPE]
	
- code
Mandatory
[MISSING_ITEMCODE]


	
- validFrom
Optional


	
- validTo
Optional
If (validFrom and validTo) are defined then validFrom <= validTo
[INVALID_VALIDTO]


Cross-validation of particular types:

	
- Combination of type + code must be unique in scope of SalesPackageValues 
[NOTUNIQUE_ITEM]


	
- // Newly assigned package
If combination of type + code is not currently in Sales Package Item (archived records are ignored) where SalesPackege.code = salesPackageCode then
// Valid From cannot be set in the past
- If validFrom is defined then validFrom >= current date + time [INVALID_VALIDFROM]


	
- If type = PRODUCT then 
- must exist Product in Product where VersionStatus = ACTIVE
[INVALID_PRODUCTCODE]
- if previous condition is satisfied then must exist intersection of intervals SalesPackageItem.(validFrom, validTo) and Product.(ValidFrom, ValidTo)
[INVALID_PRODUCTVALIDITY]


	
- If type = SERVICE then 
- must exist Service in Service where VersionStatus = ACTIVE
[INVALID_SERVICECODE]
- if previous condition is satisfied then must exist intersection of intervals SalesPackageItem.(validFrom, validTo) and Service.(ValidFrom, ValidTo)
[INVALID_SERVICEVALIDITY]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}SetSalesPackage - validation rules]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package UC
