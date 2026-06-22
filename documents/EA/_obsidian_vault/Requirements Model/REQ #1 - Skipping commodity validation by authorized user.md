---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5290 (CLM-1868) Skipping Commodity Validation functionality"
domain: "Requirements Model"
element_id: 1381472
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Skipping commodity validation by authorized user

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5290 (CLM-1868) Skipping Commodity Validation functionality

## 📝 Notes

Goal of the task is skipping commodity validation (Contract detail - commodity tab) in case of commodity editation by authorized users

Edit commodity:  

	
- Show flag "skip_validation" on the Edit commodity screen opening; i.e. get GetCommodityDataForUpdateRequest -> enabledForUpdate.validationSkipped
If validationSkipped = true and user is authorized for this action, check box "skip_validation" will be enabled, otherwise disabled. For user without authorization will be the checkbox invisible.


	
- set the flag "skip_validation" on calling CommodityWS. (i.e. "CommodityDataValues.validationSkipped"). ResultCodeUpdate - new values for evaluation/localization: UNSKIPPABLE_ALREADY_VALIDATED, UNSKIPPABLE_COMMODITY_TYPE (both new codes are "error type")
	
- the mentioned feature will be available for contracts in signed status only


Validate commodity: no change in this function.

## 📊 Appears In (1 diagrams)

- Custom: CBL-5290 (CLM-1868) Skipping Commodity Validation functionality
