---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules"
domain: "Modules"
element_id: 1878996
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Commodity Validation Rule filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules

## 📝 Notes

// Searching for required validation rules for particular commodity

Input:
- Commodity (mandatory)
- Event (optional) - when checked (for options see Commodity Validation Criteria Type)
- Product - code of product (on which the Contract.Commodity is based on)
- InsuranceService - code of insurance service (assigned to Contract.Commodity)

Output:
- SearchResult - subset from Commodity Validation Rule

Search for active validation rules in Commodity Validation Rule (CVRule) ordered by CVRule.Order:

1a. If CVRule.ValidTo is not defined and current date < CVRule.ValidFrom then continue with the next CVRule. 
1b. If CVRule.ValidTo is defined and current date is not in <CVRule.ValidFrom, CVRule.ValidTo> then continue with the next CVRule.

2. Check each Commodity Validation Rule Criteria (CVRCriteria) assigned to CVRule (take in account that more criteria of the same type can be assigned) as follows:

	
- If exists CVRCriteria.Type = COMMODITY_TYPE then Commodity.CommodityType must be in CVRCriteria.Value where CVRCriteria.Type = COMMODITY_TYPE
	
- If exists CVRCriteria.Type = MANUFACTURER then Commodity.Producer.Code must be in CVRCriteria.Value where CVRCriteria.Type = MANUFACTURER
	
- If exists CVRCriteria.Type = PRODUCT then Product must be in CVRCriteria.Value where CVRCriteria.Type = PRODUCT
	
- If exists CVRCriteria.Type = COMMODITY_INSURANCE then InsuranceService must be in CVRCriteria.Value where CVRCriteria.Type = COMMODITY_INSURANCE


	
- If exists CVRCriteria.Type = EVENT then Event must be in CVRCriteria.Value where CVRCriteria.Type = EVENT
	
- If exists CVRCriteria.Type = FINANCING_PACKAGE then Event must be in CVRCriteria.Value where CVRCriteria.Type = FINANCING_PACKAGE

If all criterias are satisfied then add CVRule to SearchResult.
Continue with the next validation rule.

Return SearchResult

## 🔗 Connections (4)

- ← Dependency: [[{MOD}POST Commodity Validation]]
- ← Dependency: [[Commodity Validation algorithm]]
- ← Dependency: [[Commodity Validation algorithm]]
- ← Dependency: [[{DEL}01.693 Validate commodity data from external systems]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Use Case
