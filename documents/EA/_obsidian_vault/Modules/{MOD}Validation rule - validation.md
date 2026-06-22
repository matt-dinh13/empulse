---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Validation Rule/Validation Rules"
domain: "Modules"
element_id: 1672536
diagrams: 2
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Validation rule - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Validation Rule/Validation Rules

## 📝 Notes

GET validationRule

	
- code
commodity type with code exists [Val_Commodity_Type_Not_Found]


	
- validOn
format YYYY-MM-DD


	
- type
must exists in Commodity Validation Type [INVALID_TYPE]
	
- externalType
must exists in Commodity Validation External Type [Val_Validation_Rule_External_Type_Not_Found]


	
- eventType
must exists in Commodity Validation Event Type


POST and PUT validationRule

	
- code
mandatory [SG_CVRMISSING_CODE]
must be unique [Val_Validation_Rule_Code_Exists]


	
- validationRuleCriterion
see validationRuleCriterion below
	
- externalType
mandatory if type = EXTERNAL [Val_Validation_Rule_External_Type_Required]
must exists in Commodity Validation External Type [Val_Validation_Rule_External_Type_Not_Found]
{ADD PCG-3452}Available only if type = EXTERNAL {/ADD}
	
- validFrom
mandatory [MSG_CVRMISSING_VALIDFROM]
	
- validTo
higher than valid from [MSG_CVRINVALID_VALIDTO]
	
- type 
mandatory [MISSING_TYPE]
must exists in Commodity Validation Type [INVALID_TYPE]


	
- order
mandatory [MISSING_ORDER]
Must be equal or higher then zero [INVALID_ORDER]


POST criteria

	
- code
mandatory [SG_CVRMISSING_CODE]
must be unique [Val_Validation_Rule_Code_Exists]
	
- validationRuleCriterion
see validationRuleCriterion below


DELETE criteria

	
- code
mandatory [SG_CVRMISSING_CODE]
must be unique [Val_Validation_Rule_Code_Exists]
	
- validationRuleCriterion
type with value must exists in Commodity Validation Rule Criteria 



validationRuleCriterion

	
- validationRuleCriterion
- validationRuleCriterion.type 
mandatory [MISSING_CRITERIONTYPE]
must exists in Commodity Validation Criteria Type [MSG_CVRINVALID_CRITERIONTYPE]
- validationRuleCriterion.value
mandatory[MISSING_CRITERIONVALUE]

If criterion of type (COMMODITY_TYPE) is defined then:
- Code stored in value(COMMODITY_TYPE) must exist in Commodity Type.
[INVALID_CRITCOMMODITYTYPE].
- If a new Commodity Validation Rule is created or the value(COMMODITY_TYPE) is changed then referenced record in Commodity Type must be set with Active = True 
[INACTIVE_CRITCOMMODITYTYPE].
If criterion of type (EVENT) is defined then:
- Code stored in value(EVENT) must exist in Commodity Validation Event Type. 
[INVALID_CRITEVENT]

## 🔗 Connections (5)

- ← Dependency: [[POST Validation Rule]]
- ← Dependency: [[GET Validation Rule]]
- ← Dependency: [[PUT Validation Rule]]
- ← Dependency: [[DELETE Validation Rule Criteria]]
- ← Dependency: [[POST Validation Rule Criteria]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
