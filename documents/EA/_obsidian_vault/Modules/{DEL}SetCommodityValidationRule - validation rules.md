---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Use Case"
domain: "Modules"
element_id: 1858721
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {DEL}SetCommodityValidationRule - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Use Case

## 📝 Notes

// Validation of SetCommodityValidationRule
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
Mandatory
[MISSING_SERIALNUMBER]
Must be unique in request scope 
[NOTUNIQUE_SERIALNUMBER]


	
- create
Mandatory
[MISSING_CREATE]


	
- code
Mandatory
[MISSING_CODE]
Number of characters must be in interval <4, 20>
Allowed characters from set "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-" (space is not allowed) 
[INVALID_CODE]
	
- values
Optional
Structure of CommodityValidationRuleValues is checked by the rule CommodityValidationRuleValues - validation rules.


Cross validation:

	
- If create = True then does not exist Commodity Validation Rule with the same code and archived = False [NOTUNIQUE_CODE]
	
- If create = False then exists Commodity Validation Rule with the same code and archived = False[NOTFOUND_CODE]

## 🔗 Connections (2)

- → Dependency: [[{DEL}CommodityValidationRuleValues - validation rules]]
- ← Dependency: [[{DEL}01.601 Set Commodity Validation Rule]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity Validation Setting UC
