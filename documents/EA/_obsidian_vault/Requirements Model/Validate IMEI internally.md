---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module"
domain: "Requirements Model"
element_id: 1721804
diagrams: 5
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Validate IMEI internally

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module

## 📝 Notes

Steps:

	
- System finds all commodities with identical IMEI as the validated application commodity according to the rule Search application commodity with following parameters on the input:
   - SearchCriterionType = 'IMEI'
   - SearchCriterionValue = "*" + value from the application //E.g. '*123456'
	
- If no matching Commodity is found, then this validation is passed successfully.
	
- Otherwise (i.e. if at least one Commodity is found) system finds all relevant applications for each such returned commodity (i.e. Contract->Contract_2_Commodity.Commodity_ID = Commodity.code). Once the list of respective applications is prepared, system filters out the currently processed application as well as all applications in status Rejected ('D') or Canceled ('T').
In case the list of applications remains empty, then this validation is passed successfully. Otherwise validation failed and system displays the MSG_IMEI_DUPLICITY message.

## 🔗 Connections (7)

- → Dependency: [[Search application commodity]]
- ← Dependency: [[Application cross-validation rules - VN]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]
- ← Dependency: [[01.650 Edit Contract Commodity (UseCase 1852203)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
- Custom: Cross validations-VN
- Custom: Operations with application commodities
- Use Case: Contract signing
- Use Case: Prepare documentation to sign
