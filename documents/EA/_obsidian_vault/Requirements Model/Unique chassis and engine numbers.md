---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module"
domain: "Requirements Model"
element_id: 1761614
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Unique chassis and engine numbers

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module

## 📝 Notes

// validation of duplicity of Serial and Engine Number
Input parameters:
- Commodity
- ContractCode

Output parameters:
- validationResult (True/False)
- list of numbers of duplicate contracts (when validation fails)

System gets all Commodity data.

If Commodity.CommodityTypeFlag(IS_VEHICLE) = True and contract defined by ContractCode is in status (SIGNED, ACTIVE) then execute following cross validations:

	
- Engine number
- if Commodity.EngineNumber is empty - validation is skipped
- else: system gets list of commodities with the same engine number by calling SearchCommodityDataRequest with SearchCriterium.criterium = ENGINE_NUMBER. Any of found commodity must not exist in any other contract (with exception of CANCELLED or REJECTED contracts). If validation fails, system logs the validation result (i.e. duplicate engine number found) for respective contract.
	
- chassis/VIN - number (Commodity.SerialNumber) 
- if Commodity.SerialNumber number is empty - validation is skipped
- else: system gets list of commodities with the same serial number by calling SearchCommodityDataRequest with SearchCriterium.criterium = SERIAL_NUMBER. Any of found commodity must not exist in any other contract (with exception of CANCELLED or REJECTED contracts). If validation fails, system logs the validation result (i.e. duplicate VIN number found) for respective contract.

Comparison of Commodity.EngineNumber and Commodity.SerialNumber is case insensitive and ignores non-alphanumeric characters (e.g. "600132CTZP78900" equals "#600132-ctzp 78900")

## 🔗 Connections (3)

- → Dependency: [[Getting Commodity data rule]]
- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]
- ← Dependency: [[01.650 Edit Contract Commodity (UseCase 1852203)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
- Custom: Common Validation Rules for Contract Management
- Use Case: Manage contract commodities
