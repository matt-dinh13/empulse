---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775631
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetSalesPackageAssignmentRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
// Validation of GetSalesPackageAssignmentRequest
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel = ERROR
into ValidationResult structure and continue with the next validation.

GetSalesPackageAssignmentRequest

	
- searchCriterion
Each assigned GetSalesPackageAssignmentCriterion is checked by the rule below


GetSalesPackageAssignmentCriterion
description = type

	
- type
Mandatory
[MISSING_CRITERIONTYPE]
Code must exist in GetSalesPackageAssignmentCriterionType
[INVALID_CRITERIONTYPE]


	
- value
Mandatory
[MISSING_CRITERIONVALUE]

Cross validation:

	
- If type = VALID_ON_DATE then the criterion must be unique (i.e. can not be defined more than once in the set of criteria).
[NOTUNIQUE_CRITERIONTYPE].
	
- If type = VALID_ON_DATE then the value can be converted into datetime data type. 
[INVALID_CRITERIONVALUE]


	
- At least one criterion of type in (SALESROOM, SALESPACKAGE) must be defined.
[MANDATORY_CRITERIONTYPE].

## 🔗 Connections (1)

- ← Dependency: [[{DEL}09.305 Get Sales Package Assignment]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package Assignment UC
