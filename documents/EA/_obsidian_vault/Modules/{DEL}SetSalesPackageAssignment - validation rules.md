---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775630
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {DEL}SetSalesPackageAssignment - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
// Validation of SetSalesPackageAssignment
If checkingLevel is not explicitly defined for particular validation then use default = ERROR.
If Request.fullCheck = False then ignore all validations with checkingLevel <> ERROR.
If any validation fails for attribute then 
1) Add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel  
into ValidationResult structure.
2) If Request.fullCheck = True then continue with validation of the next attribute else return.

Validations:

	
- serialNumber
Mandatory
[MISSING_SERIALNUMBER]
Must be unique in request scope 
[NOTUNIQUE_SERIALNUMBER]


	
- values
Structure of SalesPackageAssignmentValues is checked by the rule SalesPackageAssignmentValues - validation rules.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}09.304 Set Sales Package Assignment]]
- → Dependency: [[{DEL}SalesPackageAssignmentValues - validation rules]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package Assignment UC
