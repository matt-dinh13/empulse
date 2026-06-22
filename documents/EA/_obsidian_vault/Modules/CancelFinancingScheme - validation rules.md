---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case"
domain: "Modules"
element_id: 1656798
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 CancelFinancingScheme - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case

## 📝 Notes

If checkingLevel is not explicitly defined for particular validation then use default = ERROR.
If any validation fails for attribute then 
1) Add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel  
into ValidationResult structure.

// Validation of CancelFinancingScheme

	
- serialNumber 
Mandatory [MISSING_SERIALNUMBER]
Must be unique in request scope 
[NOTUNIQUE_SERIALNUMBER]


	
- version
Mandatory [MISSING_VERSION]
Corresponding version of Financing Scheme must exist [VERSION_NOTFOUND]
Version must be in status Inactive (N) or For Activation (F) [INVALID_VERSIONSTATUS]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}04.407 Cancel Financing Scheme]]

## 📊 Appears In (1 diagrams)

- Use Case: Financing Scheme Management UC
