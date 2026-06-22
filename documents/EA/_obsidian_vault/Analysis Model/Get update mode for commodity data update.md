---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Business Rules"
domain: "Analysis Model"
element_id: 1573590
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Get update mode for commodity data update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Business Rules

## 📝 Notes

This object describes an algorithm, how system gets the update mode for commodity data update.

Input:
- contractCode
- commodityID

Output:
- updateMode = update mode to be used as an input for commodity data update

Algorithm:

	
- System takes the current user and the parameters from the input.
	
- System evaluates the Access control to edit commodity fields rule and based on it determines the applicable updateMode as follows:
- if (A = TRUE AND B = TRUE AND NOT (D = TRUE AND E = FALSE)), then updateMode = 'NO_RESTRICTION',
- if (A = TRUE AND B = FALSE AND C = FALSE AND NOT (D = TRUE AND E = FALSE)), then updateMode = 'WITH_RESTRICTION',
- if (((A = TRUE AND B = TRUE) OR (A = TRUE AND B = FALSE AND C = FALSE)) AND D = TRUE AND E = FALSE), then updateMode = 'COMMODITY_VALIDATED',
- otherwise no updateMode is selected.
	
- System returns the respective updateMode and algorithm ends.

## 🔗 Connections (3)

- → Dependency: [[Access control to edit commodity fields]]
- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]
- ← Dependency: [[01.650 Edit Contract Commodity (UseCase 1852203)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
- Use Case: Manage contract commodities
