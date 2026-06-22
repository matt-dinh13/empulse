---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775632
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {DEL}SetSalesPackage - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
// Validation of SetSalesPackage
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


	
- create
Mandatory
[MISSING_CREATE]


	
- code
Mandatory
[MISSING_CODE]
Number of characters must be in interval <4, 20>
Allowed characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed) 
[INVALID_CODE]
	
- values
Structure of SalesPackageValues is checked by the rule SalesPackageValues - validation rules with code as parameter.


Cross validation:

	
- If create = True then does not exist Sales Package with the same code and archived = False [NOTUNIQUE_CODE]
	
- If create = False then exists Sales Package with the same code and archived = False[NOTFOUND_CODE]

## 🔗 Connections (2)

- ← Dependency: [[{DEL}09.301 Set Sales Package]]
- → Dependency: [[{DEL}SalesPackageValues - validation rules]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package UC
