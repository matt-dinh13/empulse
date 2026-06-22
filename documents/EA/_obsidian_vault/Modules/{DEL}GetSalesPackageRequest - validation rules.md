---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775634
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetSalesPackageRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
// Validation of GetSalesPackageRequest
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel = ERROR
into ValidationResult structure and continue with the next validation.

GetSalesPackageRequest

	
- searchCriterion
Each assigned GetSalesPackageCriterion is checked by the rule below


GetSalesPackageCriterion
description = type

	
- type
Mandatory
[MISSING_CRITERIONTYPE]
Code must exist in GetSalesPackageCriterionType
[INVALID_CRITERIONTYPE]


	
- value
Mandatory
[MISSING_CRITERIONVALUE]

Cross validation:

	
- If type in (NAME, ACTIVE) then the criterion must be unique (i.e. can not be defined more than once in the set of criteria).
[NOTUNIQUE_CRITERIONTYPE].
	
- If type = ACTIVE then the value can be converted into boolean data type. 
[INVALID_CRITERIONVALUE]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}09.302 Get Sales Package]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package UC
