---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}COMMON for Commodity Validation Setting"
domain: "Modules"
element_id: 1858720
diagrams: 2
connections: 6
tags:
  - requirement
  - modules
---

# 📋 {DEL}CommodityValidationRuleValues - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Interface Provided/{DEL}COMMON for Commodity Validation Setting

## 📝 Notes

// Validation of CommodityValidationRuleValues

CommodityValidationRuleValues

	
- validFrom
Mandatory
[MISSING_VALIDFROM]


	
- validTo
Optional
If validTo is defined then validFrom <= validTo
[INVALID_VALIDTO]


	
- order
Mandatory
[MISSING_ORDER]
{ADD PCG-2413}Must be equal or higher then zero
[INVALID_ORDER]{/ADD}


	
- type
Mandatory
[MISSING_TYPE]
Code must exist in Commodity Validation Type 
[INVALID_TYPE]


	
- externalType
Mandatory if type = EXTERNAL
[MISSING_EXTERNALTYPE]
Code must exist in Commodity Validation External Type 
[INVALID_EXTERNALTYPE]
	
- criterion
Optional
Each assigned CommodityValidationRuleCriterion is checked by the rule below


CommodityValidationRuleCriterion
description = "Criterion: " + type + " " + value

	
- type
Mandatory
[MISSING_CRITERIONTYPE]
Code must exist in Commodity Validation Criteria Type 
[INVALID_CRITERIONTYPE]
	
- value
Mandatory
[MISSING_CRITERIONVALUE]

Validation of value of particular criterion type:

	
- If criterion of type (COMMODITY_TYPE) is defined then:
- Code stored in value(COMMODITY_TYPE) must exist in Commodity Type.
[INVALID_CRITCOMMODITYTYPE].
- If a new Commodity Validation Rule is created or the value(COMMODITY_TYPE) is changed then referenced record in Commodity Type must be set with Active = True 
[INACTIVE_CRITCOMMODITYTYPE].


	
- If criterion of type (EVENT) is defined then:
- Code stored in value(EVENT) must exist in Commodity Validation Event Type. 
[INVALID_CRITEVENT]


{ADD PCG-2048}
If more than one manufacturer value (code) will be filled in where Rule type: External validation and Criterion type: Manufacturer than display warning message (MSG_CVRMORE_MANUFACTURERVALUES).{/ADD}

## 🔗 Connections (6)

- ← Dependency: [[{DEL}SetCommodityValidationRule - validation rules]]
- → Dependency: [[{MOD}Commodity Validation Criteria Type]]
- → Dependency: [[Commodity Validation External Type (Class 1744497)]]
- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[{MOD}Commodity Validation Event Type]]
- → Dependency: [[{MOD}Commodity Validation Type]]

## 📊 Appears In (2 diagrams)

- Logical: {DEL}CommodityValidationsRulesValues
- Use Case: Commodity Validation Setting UC
