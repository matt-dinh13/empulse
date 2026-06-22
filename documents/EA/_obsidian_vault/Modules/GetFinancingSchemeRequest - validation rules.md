---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case"
domain: "Modules"
element_id: 1656799
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 GetFinancingSchemeRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case

## 📝 Notes

// Validation of GetFinancingSchemeRequest
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel = ERROR
into ValidationResult structure and continue with the next validation.

GetFinancingSchemeRequest

	
- Each assigned GetFinancingSchemeCriterion is checked by the rule below


GetFinancingSchemeCriterion
description = type

	
- type
Mandatory [MISSING_CRITERIONTYPE]
Code must exist in GetFinancingSchemeCriterionType 
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
- ← Dependency: [[{DEL}04.402 Get Financing Scheme]]

## 📊 Appears In (1 diagrams)

- Use Case: Financing Scheme Management UC
