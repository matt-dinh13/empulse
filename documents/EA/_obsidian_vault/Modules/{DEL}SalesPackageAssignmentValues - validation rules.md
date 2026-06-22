---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775635
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}SalesPackageAssignmentValues - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
// Validation of SalesPackageAssignmentValues

SalesPackageAssignmentValues

	
- salesroomCode
Mandatory
[MISSING_SALESROOM]
Exists Salesroom in Salesroom where Salesroom.Code = salesroomCode
[INVALID_SALESROOM]


	
- salesPackageCode
Mandatory
[MISSING_SALESPACKAGE]
Exists SalesPackage in Sales Package where SalesPackage.Code = salesPackageCode
[INVALID_SALESPACKAGE]
	
- validFrom
Optional


	
- validTo
If validTo is defined then validFrom <= validTo
[INVALID_VALIDTO]

Cross-validation of particular types:

	
- // Newly assigned Sales Package
If SalesPackage where code = salesPackageCode is not currently assigned to Salesroom where code = salesroomCode in Salesroom To Sales Package (archived records are ignored) then:
// Sales Package must be active
- SalesPackage.Active = True [INACTIVE_SALESPACKAGE]
// Valid From cannot be set in the past
- If validFrom is defined then validFrom >= current date + time [INVALID_VALIDFROM]
	
- {ADD PROBID-34} // Sales package already assigned on salesroom
- SalesPackage where code = salesPackageCode must not be currently assigned on Salesroom where code = salesroomCode [SALES_PACKAGE_ALREADY_ASSIGNED]
	
- // Sales package duplicity assignment in request
- Combination (salesPackageCode,salesroomCode) must be unique in request [SALES_PACKAGE_DUPLICATED] {/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{DEL}SetSalesPackageAssignment - validation rules]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package Assignment UC
