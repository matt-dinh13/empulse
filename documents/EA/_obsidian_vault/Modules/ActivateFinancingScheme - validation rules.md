---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case"
domain: "Modules"
element_id: 1656794
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 ActivateFinancingScheme - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case

## 📝 Notes

If checkingLevel is not explicitly defined for particular validation then use default = ERROR.
If Request.fullCheck = False then ignore all validations with checkingLevel <> ERROR.
If any validation fails for attribute then 
1) Add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel  
into ValidationResult structure.
2) If Request.fullCheck = True then continue with validation of the next attribute else return.

// Validation of ActivateFinancingScheme (skipped in 04.406 Activate Financing Scheme version automatically)

	
- serialNumber
Mandatory [MISSING_SERIALNUMBER]
Must be unique in request scope 
[NOTUNIQUE_SERIALNUMBER]


	
- version [MISSING_VERSION]
Mandatory
Corresponding version of Financing Scheme must exist [VERSION_NOTFOUND]
Version must be in status Inactive (N) or For Activation (F) [INVALID_VERSIONSTATUS]


	
- plannedActivationDate
Optional
plannedActivationDate > current date [INVALID_PLANNEDACTIVATIONDATE]


// Validation of status of Financing Scheme
Financing Scheme (FP) represented by version is checked as follows:

	
- Maximal or Minimal Transaction Amount is defined.
[NO_INTERVALTRANSAMOUNT, checkingLevel = WARNING]

## 🔗 Connections (2)

- ← Dependency: [[Automatic Version activation processing]]
- ← Dependency: [[{DEL}04.404 Activate Financing Scheme]]

## 📊 Appears In (1 diagrams)

- Use Case: Financing Scheme Management UC
