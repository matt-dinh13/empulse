---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules"
domain: "Modules"
element_id: 1878998
diagrams: 7
connections: 11
tags:
  - requirement
  - modules
---

# 📋 Commodity Validation algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules

## 📝 Notes

// Validation of Commodity attributes
Input:
- Commodity (mandatory)
- Event (optional) - when checked (for options see Commodity Validation Criteria Type)
- Product = code of product (on which the Contract.Commodity is based on)
- InsuranceService = code of insurance service (assigned to Contract.Commodity)
- FinancingPackage = code of financing package (on which Contract.Commodity is based on)

Output:
- ValidationResult - boolean, true if successful
- ErrorMessage

ErrorMessage = empty string
Search in Commodity Validation Rule according to Commodity Validation Rule filter with parameters (Commodity, Event).
For each active validation rule (CVRule) in search result validate Commodity according to CVRule.Type. 

	
- If CVRule.Type = EXTERNAL then continue with the next validation rule (type EXTERNAL is used separately in 01.693 Validate commodity data from external systems)


	
- If CVRule.Type = VALIDATED then Commodity.Validated = True (CMD_VAL_COMMODITY_NOT_VALIDATED)
	
- If CVRule.Type = IMEI_MANDATORY then Commodity.IMEI is filled in (CMD_VAL_IMEI_MISSING)
	
- If CVRule.Type = SER_NUM_MANDATORY then Commodity.SerialNumber is filled in (CMD_VAL_SERIAL_NUMBER_MISSING)
	
- If CVRule.Type = MSISDN_MANDATORY then Commodity.MSISDN is filled in (CMD_VAL_MSISDN_MISSING)
	
- If CVRule.Type = IMEI_OR_SN_MANDATORY then Commodity.IMEI or Commodity.MSISDN is filled in (CMD_VAL_SERIAL_NUMBER_OR_IMEI_MANDATORY)
	
- If CVRule.Type = IMEI_DUPLICITY then IMEI duplicity check is true (CMD_VAL_IMEI_DUPLICITY)
	
- If CVRule.Type = SN_DUPLICITY then SN duplicity check is true (CMD_VAL_SN_DUPLICITY)

If any validation is not satisfied then add error message to ErrorMessage as a separate line with Commodity as parameter.
Continue with the next validation rule.

If any validation is not satisfied then return 
- ValidationResult = False
- ErrorMessage 
else return 
- ValidationResult = True

## 🔗 Connections (10)

- ← Dependency: [[{DEL}CommodityDataRequest - validation rules]]
- ← Dependency: [[{MOD}Commodity - validation]]
- ← Dependency: [[{MOD}POST Commodity Validation]]
- → Dependency: [[ValidationParametersDto]]
- → Dependency: [[SN duplicity check]]
- → Dependency: [[Commodity Validation Rule filter]]
- → Dependency: [[Commodity Validation Rule filter]]
- → Dependency: [[IMEI duplicity check]]
- ← Dependency: [[{DEL}01.693 Validate commodity data from external systems]]
- ← Dependency: [[{DEL}01.692 Update commodity data from external systems]]

## 📊 Appears In (7 diagrams)

- Custom: Business Rules
- Custom: PCG-5108 -SAMSUNG - HA validation Integration - Hosel origination
- Custom: PCG-5109 - Samsung - Updated API for IMEI validation
- Custom: Validation Rules
- Use Case: {DEL}Manage commodity data from external systems
- Use Case: Contract signing
- Use Case: Use Case
