---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Use Case"
domain: "Modules"
element_id: 1858718
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetCommodityValidationRuleRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Use Case

## 📝 Notes

// Validation of GetCommodityValidationRuleRequest
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel = ERROR
into ValidationResult structure and continue with the next validation.

GetCommodityValidationRuleRequest

	
- searchCriterion
Each assigned GetCommodityValidationRuleCriterion is checked by the rule below


GetCommodityValidationRuleCriterion
description = type

	
- type
Mandatory
[MISSING_CRITERIONTYPE]
Code must exist in GetCommodityValidationRuleCriterionType
[INVALID_CRITERIONTYPE]


	
- value
Mandatory
[MISSING_CRITERIONVALUE]

Cross validation:

	
- If type in (NAME, VALID_ON_DATE) then the criterion must be unique (i.e. can not be defined more than once in the set of criteria).
[NOTUNIQUE_CRITERIONTYPE].
	
- If type = VALID_ON_DATE then the value can be converted into datetime data type. 
[INVALID_CRITERIONVALUE]


	
- If type = TYPE then exists Commodity Validation Type where code = value. 
[INVALID_CRITERIONVALUE]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}01.602 Get Commodity Validation Rule]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity Validation Setting UC
