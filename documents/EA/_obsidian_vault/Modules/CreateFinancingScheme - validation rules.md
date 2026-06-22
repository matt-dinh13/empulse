---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case"
domain: "Modules"
element_id: 1656797
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 CreateFinancingScheme - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case

## 📝 Notes

// Validation of CreateFinancingScheme
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
Mandatory [MISSING_SERIALNUMBER]
Must be unique in request scope 
[NOTUNIQUE_SERIALNUMBER]
	
- code
Mandatory  [MISSING_CODE]
Number of characters must be in interval <4, 20>
Allowed characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed) 
[INVALID_CODE]
	
- values
Optional
If assigned then structure of FinancingSchemeValues is checked by the rule FinancingSchemeValues - validation rules.
	
- sourceVersion
Optional
If assigned then corresponding version of Financing Scheme must exist [INVALID_SOURCEVERSION]


Cross validation:

	
- If sourceVersion is not assigned or sourceVersion.code <> code then does not exist Financing Scheme with the same code [NOTUNIQUE_CODE]

## 🔗 Connections (2)

- → Dependency: [[FinancingSchemeValues - validation rules]]
- ← Dependency: [[{DEL}04.401 Create Financing Scheme]]

## 📊 Appears In (1 diagrams)

- Use Case: Financing Scheme Management UC
