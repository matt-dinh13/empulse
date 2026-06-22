---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office"
domain: "Requirements Model"
element_id: 1584128
diagrams: 3
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}BO Limited Search criteria restriction

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office

## 📝 Notes

{ADD CLM-3352/}
This rule presents obtaining basic search criteria based on values entered by user on BO Limited Search panel, Salesroom selection and various system setting.

Steps: 

	
- System sets UserCriteria by values from the form.BO Limited Search panel
	
- At least one of the following rules of UserCriteria must be met:
- Rule1: Contract number is filled
- Rule2: Document type and Document ID number are filled
- Rule3: Vin Code is filled
	
- If a salesroom is selected then system sets UC.CurrentSalesroom = selected salesroom else UC.CurrentSalesroom = Null
	
- If form.Include mistakes = 1 then  system sets UC.IncludeMistakes = 1 else UC.IncludeMistakes = 0
	
- For any other case, system displays error message MSG_0434/MSG_INSUFFICIENT_SEARCH_CRITERIA and process ends.
	
- System returns UserCriteria to the calling process

## 🔗 Connections (2)

- ← Dependency: [[{ADD}BO Limited Search criteria restriction (Action 1584132)]]
- ← Dependency: [[{MOD}Contract search filter]]

## 📊 Appears In (3 diagrams)

- Custom: REQ #2 - Implement BO Limited Search
- Custom: Validation rules
- Use Case: Contract search
