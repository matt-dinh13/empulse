---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775636
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetSalesroomSalesItemRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
// Validation of GetSalesroomSalesItemRequest
If any validation fails for attribute then add new record with
- resultCode (defined in brackets)
- description (if defined)
- checkingLevel = ERROR
into ValidationResult structure and continue with the next validation.

GetSalesroomSalesItemRequest

	
- searchCriterion
Each assigned GetSalesroomSalesItemCriterion is checked by the rule below


GetSalesroomSalesItemCriterion
description = type

	
- type
Mandatory
[MISSING_CRITERIONTYPE]
Code must exist in GetSalesroomSalesItemCriterionType
[INVALID_CRITERIONTYPE]
	
- value
Mandatory
[MISSING_CRITERIONVALUE]

Cross validation:

	
- If type = VALID_ON_DATE is defined then the criterion must be unique (i.e. can not be defined more than once in the set of criteria).
[NOTUNIQUE_CRITERIONTYPE].
	
- If type = VALID_ON_DATE then the value can be converted into datetime data type. 
[INVALID_CRITERIONVALUE].


	
- {ADD TID-5405}If global parameter BL_USE_SALES_PACKAGE  = TRUE then{/ADD} at least one criterion of type in (SALESROOM, PRODUCT, SERVICE) must be defined. {ADD TID-5405}If global parameter BL_USE_SALES_PACKAGE  = FALSE then at least one criterion of type in (SALESROOM, PRODUCT) must be defined.{/ADD}
[MANDATORY_CRITERIONTYPE].


	
- If type = ITEMTYPE then the code stored in value must exists in Sales Package Item Type. 
[INVALID_CRITERIONVALUE]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}09.308 Get Salesroom Sales Item]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package Assignment UC
