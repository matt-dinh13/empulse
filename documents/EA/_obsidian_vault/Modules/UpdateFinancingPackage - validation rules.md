---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1842681
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 UpdateFinancingPackage - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case

## 📝 Notes

// Validation of UpdateFinancingPackage
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
	
- Must be unique in request scope 
[NOTUNIQUE_SERIALNUMBER]
	
- version
Mandatory
[MISSING_VERSION]
Corresponding version of Financing Scheme must exist [VERSION_NOTFOUND]
Version must be in status Inactive (N) or For Activation (F) [INVALID_VERSIONSTATUS]
	
- values
Mandatory
Structure of FinancingSchemeValues is checked by the rule FinancingPackageValues - validation rules.

## 🔗 Connections (2)

- → Dependency: [[{MOD}FinancingPackageValues - validation rules]]
- ← Dependency: [[{DEL}04.413 Update Financing Package]]

## 📊 Appears In (1 diagrams)

- Use Case: Financing Package UC
