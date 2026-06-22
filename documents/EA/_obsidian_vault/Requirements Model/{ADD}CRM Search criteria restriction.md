---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office"
domain: "Requirements Model"
element_id: 1584124
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}CRM Search criteria restriction

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office

## 📝 Notes

{ADD CLM-3352/}
This rule presents obtaining basic search criteria based on values entered by user on CRM Search panel, Salesroom selection and various system setting.

Steps: 

	
- System sets UserCriteria by values from the form.BO Limited Search panel.
	
- System calls Get system contract search criteria based on configuration with filterCode = CRM Search. System sets SystemCriteria by values from response.
	
- If a salesroom is selected then system sets UC.CurrentSalesroom = selected salesroom else UC.CurrentSalesroom = Null.
	
- If form.Include mistakes = 1 then  system sets UC.IncludeMistakes = 1 else UC.IncludeMistakes = 0.
	
- At least one of the following rules of UserCriteria must be met:
- Rule1: Contract number is filled
- Rule2: Document type and Document ID number are filled
- Rule3: Vin Code is filled
- Rule4: National identification number
- Rule5: At least one status is selected, Date from, Date to are filled
	
- If Rule5 is met and UC.CurrentSalesroom = Null then system displays error message MSG_0264 (e.g. You have to choose salesroom you work on.) and process ends.
If Rule5 is met and UC.DateFrom < Now - SC.DaysSinceBE then system displays error message lessThanOrEqualToDateFormValidator_msg (e.g. Date to can not be set sooner then Date from!) and process ends.
If Rule5 is met and UC.DateFrom > UC.DateTo then system displays error message MSG_DateCannotBeInFuture (e.g. Date to cannot be in in future.) and process
For any other case, system displays error message MSG_0434/MSG_INSUFFICIENT_SEARCH_CRITERIA and process ends.
	
- System returns UserCriteria to the calling process.

## 🔗 Connections (3)

- → Dependency: [[{ADD}Get system contract search criteria based on configuration]]
- ← Dependency: [[{ADD}CRM Search criteria restriction (Action 1584134)]]
- ← Dependency: [[{MOD}Contract search filter]]

## 📊 Appears In (3 diagrams)

- Custom: REQ #3 - Implement CRM Search
- Custom: Validation rules
- Use Case: Contract search
