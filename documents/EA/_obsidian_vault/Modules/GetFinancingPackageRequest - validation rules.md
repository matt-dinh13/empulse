---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1842683
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 GetFinancingPackageRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case

## 📝 Notes

// Validation of GetFinancingPackageRequest
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel = ERROR
into ValidationResult structure and continue with the next validation.

GetFinancingPackageRequest

	
- Each assigned GetFinancingPackageCriterion is checked by the rule below


GetFinancingPackageCriterion
description = type

	
- type
Mandatory
[MISSING_CRITERIONTYPE]
Code must exist in GetFinancingPackageCriterionType
Value can be converted into datetime data type. 
[INVALID_CRITERIONTYPE]


	
- value
Mandatory
[MISSING_CRITERIONVALUE]


Cross validation:

	
- If type = VALID_ON_DATE then the criterion must be unique (i.e. can not be defined more than once in the set of criteria).
[NOTUNIQUE_CRITERIONTYPE].
	
- If type = VALID_ON_DATE then the value can be converted into datetime data type. 
[INVALID_CRITERIONVALUE]


	
- Validate type and value according to rule GetVersionedEntityCriterionValue - validation rules.

## 🔗 Connections (2)

- → Dependency: [[GetVersionedEntityCriterionValue - validation rules]]
- ← Dependency: [[{DEL}04.412 Get Financing Package]]

## 📊 Appears In (1 diagrams)

- Use Case: Financing Package UC
